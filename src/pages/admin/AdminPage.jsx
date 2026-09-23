import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import {
  Lock, Mail, User, Shield, CheckCircle2, AlertCircle,
  Eye, EyeOff, Search, RefreshCw, Trash2, LogOut,
  Phone, Hospital, Bed, Layers, FileSpreadsheet, Calendar,
  Download, X, MessageSquare, Clock, ArrowRight, Star,
  PlusCircle, Pencil, ToggleLeft, ToggleRight, Building2,
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

const BACKDROP_PRESETS = [
  { label: "Orange", value: "#FF4D27" },
  { label: "Blue", value: "#1E74B7" },
  { label: "Green", value: "#43A047" },
  { label: "Teal", value: "#00897B" },
  { label: "Purple", value: "#6D28D9" },
  { label: "Navy", value: "#0B132B" },
  { label: "Sky", value: "#0284C7" },
  { label: "Rose", value: "#E11D48" },
];

const EMPTY_TESTIMONIAL = {
  name: "", position: "", hospital: "", quote: "",
  logoUrl: "", backdropColor: "#FF4D27", backdropRotate: "rotate-6",
  avatarBg: "bg-white", isActive: true, sortOrder: 0,
};

export const AdminPage = () => {
  // ── Auth state ──────────────────────────────────────────────────────────────
  const [adminToken, setAdminToken] = useState(() => localStorage.getItem("hamsa_admin_token") || "");
  const [currentAdmin, setCurrentAdmin] = useState(() => {
    try { const s = localStorage.getItem("hamsa_admin_user"); return s ? JSON.parse(s) : null; }
    catch { return null; }
  });
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");

  // ── Sidebar ─────────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState("contacts");

  // ── Contacts state ──────────────────────────────────────────────────────────
  const [inquiries, setInquiries] = useState([]);
  const [isLoadingInquiries, setIsLoadingInquiries] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [editingNotes, setEditingNotes] = useState("");
  const [isSavingNotes, setIsSavingNotes] = useState(false);

  // ── Testimonials state ──────────────────────────────────────────────────────
  const [testimonials, setTestimonials] = useState([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(false);
  const [testimonialForm, setTestimonialForm] = useState(EMPTY_TESTIMONIAL);
  const [editingTestimonialId, setEditingTestimonialId] = useState(null);
  const [isSavingTestimonial, setIsSavingTestimonial] = useState(false);
  const [testimonialFormOpen, setTestimonialFormOpen] = useState(false);

  // ── Toast ───────────────────────────────────────────────────────────────────
  const [toastMessage, setToastMessage] = useState("");
  const showToast = (msg) => { setToastMessage(msg); setTimeout(() => setToastMessage(""), 3500); };

  // ── Auth helpers ─────────────────────────────────────────────────────────────
  const handleAuthSuccess = (token, adminUser) => {
    setAdminToken(token);
    setCurrentAdmin(adminUser);
    localStorage.setItem("hamsa_admin_token", token);
    localStorage.setItem("hamsa_admin_user", JSON.stringify(adminUser));
    showToast(`Welcome back, ${adminUser.name}!`);
  };

  const handleLogout = () => {
    setAdminToken("");
    setCurrentAdmin(null);
    localStorage.removeItem("hamsa_admin_token");
    localStorage.removeItem("hamsa_admin_user");
    setAuthError("");
    setAuthSuccess("Logged out successfully.");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setAuthError(""); setAuthSuccess(""); setAuthLoading(true);
    try {
      const res = await fetch(`${API_BASE}/admin/login`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });
      const data = await res.json();
      if (res.ok && data.success) { handleAuthSuccess(data.token, data.admin); }
      else { throw new Error(data.message || "Invalid admin email or password"); }
    } catch (err) {
      setAuthError(err.message || "Failed to connect to database.");
    } finally { setAuthLoading(false); }
  };

  // ── Contacts functions ───────────────────────────────────────────────────────
  const fetchInquiries = async () => {
    setIsLoadingInquiries(true);
    try {
      const res = await fetch(`${API_BASE}/contacts`, { headers: { Authorization: `Bearer ${adminToken}` } });
      if (res.status === 401) { setIsLoadingInquiries(false); handleLogout(); return; }
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) setInquiries(json.data);
      }
    } catch (err) { console.error("Failed to fetch inquiries:", err); }
    setIsLoadingInquiries(false);
  };

  const handleUpdateStatus = async (id, newStatus) => {
    setInquiries((prev) => prev.map((item) => (item._id === id || item.id === id ? { ...item, status: newStatus } : item)));
    if (selectedInquiry && (selectedInquiry._id === id || selectedInquiry.id === id)) {
      setSelectedInquiry((prev) => ({ ...prev, status: newStatus }));
    }
    try {
      const res = await fetch(`${API_BASE}/contacts/${id}/status`, {
        method: "PATCH", headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) showToast(`Status updated to "${newStatus}".`);
    } catch (err) { showToast("Could not sync status update."); }
  };

  const handleSaveNotes = async () => {
    if (!selectedInquiry) return;
    setIsSavingNotes(true);
    const id = selectedInquiry._id || selectedInquiry.id;
    setInquiries((prev) => prev.map((item) => (item._id === id || item.id === id ? { ...item, adminNotes: editingNotes } : item)));
    setSelectedInquiry((prev) => ({ ...prev, adminNotes: editingNotes }));
    try {
      const res = await fetch(`${API_BASE}/contacts/${id}/status`, {
        method: "PATCH", headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify({ adminNotes: editingNotes }),
      });
      if (res.ok) showToast("Notes saved.");
      else if (res.status === 401) handleLogout();
    } catch { showToast("Could not save notes."); }
    setIsSavingNotes(false);
  };

  const handleDeleteInquiry = async (id, e) => {
    if (e) e.stopPropagation();
    if (!window.confirm("Delete this contact submission?")) return;
    setInquiries((prev) => prev.filter((item) => item._id !== id && item.id !== id));
    if (selectedInquiry && (selectedInquiry._id === id || selectedInquiry.id === id)) { setIsDetailModalOpen(false); setSelectedInquiry(null); }
    try {
      await fetch(`${API_BASE}/contacts/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${adminToken}` } });
      showToast("Inquiry deleted.");
    } catch { showToast("Could not delete inquiry."); }
  };

  const handleExportCSV = () => {
    if (!inquiries.length) { alert("No data to export."); return; }
    const headers = ["ID","Date","Name","Organization","Designation","Email","Mobile","City","Hospital Type","Beds","Product","Current HIS","Status","Admin Notes","Message"];
    const rows = filteredInquiries.map((item) => [
      `"${item._id || item.id || ""}"`, `"${new Date(item.createdAt).toLocaleDateString()}"`,
      `"${(item.name || "").replace(/"/g,'""')}"`, `"${(item.organization || "").replace(/"/g,'""')}"`,
      `"${(item.designation || "").replace(/"/g,'""')}"`, `"${item.email || ""}"`,
      `"${item.mobile || ""}"`, `"${(item.city || "").replace(/"/g,'""')}"`,
      `"${item.hospitalType || ""}"`, `"${item.beds || ""}"`, `"${item.product || ""}"`,
      `"${(item.currentHis || "").replace(/"/g,'""')}"`, `"${item.status || "New"}"`,
      `"${(item.adminNotes || "").replace(/"/g,'""')}"`, `"${(item.message || "").replace(/"/g,'""')}"`,
    ]);
    const csv = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", `hamsa_inquiries_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link); link.click(); document.body.removeChild(link);
  };

  // ── Testimonials functions ───────────────────────────────────────────────────
  const fetchTestimonials = async () => {
    setIsLoadingTestimonials(true);
    try {
      const res = await fetch(`${API_BASE}/testimonials`, { headers: { Authorization: `Bearer ${adminToken}` } });
      if (res.status === 401) { handleLogout(); return; }
      if (res.ok) {
        const json = await res.json();
        if (json.success) setTestimonials(json.data);
      }
    } catch (err) { console.error("Failed to fetch testimonials:", err); }
    setIsLoadingTestimonials(false);
  };

  const openAddTestimonial = () => {
    setEditingTestimonialId(null);
    setTestimonialForm(EMPTY_TESTIMONIAL);
    setTestimonialFormOpen(true);
  };

  const openEditTestimonial = (t) => {
    setEditingTestimonialId(t.id);
    setTestimonialForm({
      name: t.name || "", position: t.position || "", hospital: t.hospital || "",
      quote: t.quote || "", logoUrl: t.logoUrl || "",
      backdropColor: t.backdropColor || "#FF4D27", backdropRotate: t.backdropRotate || "rotate-6",
      avatarBg: t.avatarBg || "bg-white", isActive: t.isActive !== false, sortOrder: t.sortOrder || 0,
    });
    setTestimonialFormOpen(true);
  };

  const handleSaveTestimonial = async (e) => {
    e.preventDefault();
    if (!testimonialForm.name || !testimonialForm.hospital || !testimonialForm.quote) {
      showToast("Name, hospital, and quote are required."); return;
    }
    setIsSavingTestimonial(true);
    try {
      const isEdit = !!editingTestimonialId;
      const url = isEdit ? `${API_BASE}/testimonials/${editingTestimonialId}` : `${API_BASE}/testimonials`;
      const res = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify(testimonialForm),
      });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(isEdit ? "Testimonial updated." : "Testimonial added.");
        setTestimonialFormOpen(false);
        fetchTestimonials();
      } else { showToast(data.message || "Save failed."); }
    } catch { showToast("Could not save testimonial."); }
    setIsSavingTestimonial(false);
  };

  const handleDeleteTestimonial = async (id) => {
    if (!window.confirm("Delete this testimonial?")) return;
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
    try {
      await fetch(`${API_BASE}/testimonials/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${adminToken}` } });
      showToast("Testimonial deleted.");
    } catch { showToast("Could not delete testimonial."); fetchTestimonials(); }
  };

  const handleToggleActive = async (t) => {
    const updated = { ...t, isActive: !t.isActive };
    setTestimonials((prev) => prev.map((x) => (x.id === t.id ? { ...x, isActive: !x.isActive } : x)));
    try {
      const res = await fetch(`${API_BASE}/testimonials/${t.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify({ ...t, isActive: !t.isActive }),
      });
      if (!res.ok) { fetchTestimonials(); showToast("Could not toggle status."); }
      else showToast(updated.isActive ? "Testimonial set to active." : "Testimonial hidden.");
    } catch { fetchTestimonials(); showToast("Could not toggle status."); }
  };

  // ── Effects ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    localStorage.removeItem("hamsa_admin_contacts");
    localStorage.removeItem("hamsa_registered_admins");
    if (adminToken) { fetchInquiries(); fetchTestimonials(); }
  }, [adminToken]);

  // ── Derived state ─────────────────────────────────────────────────────────────
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      if (selectedProduct !== "All" && item.product !== selectedProduct) return false;
      if (selectedStatus !== "All" && item.status !== selectedStatus) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        if (!["name","organization","email","mobile","city","designation"].some((k) => item[k]?.toLowerCase().includes(q))) return false;
      }
      return true;
    });
  }, [inquiries, selectedProduct, selectedStatus, searchQuery]);

  const stats = useMemo(() => ({
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "New").length,
    contacted: inquiries.filter((i) => i.status === "Contacted").length,
    inProgress: inquiries.filter((i) => i.status === "In Progress").length,
    closed: inquiries.filter((i) => i.status === "Closed").length,
  }), [inquiries]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "New": return "bg-rose-100 text-rose-800 border-rose-200";
      case "Contacted": return "bg-amber-100 text-amber-800 border-amber-200";
      case "In Progress": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Closed": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      default: return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  // ============================================================================
  // VIEW 1: LOGIN
  // ============================================================================
  if (!adminToken) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B132B] via-[#111C44] to-[#080D1D] text-slate-100 font-sans flex flex-col justify-center items-center py-12 px-4 relative overflow-hidden select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FF4D27]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        <div className="w-full max-w-[480px] relative z-10 space-y-6">
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <Link to="/" className="inline-block p-2.5 rounded-2xl bg-white shadow-lg hover:scale-105 transition-transform">
                <img src={logoImg} alt="HAMSA SOHAM Logo" className="h-10 sm:h-12 w-auto object-contain" />
              </Link>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FF4D27] text-xs font-black uppercase tracking-widest backdrop-blur-md">
              <Shield className="w-4 h-4" />
              <span>Administrative Gateway</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Admin Portal</h1>
            <p className="text-xs text-slate-400">Authorized personnel only. Sign in with your admin credentials.</p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white text-slate-900 border border-slate-200/90 shadow-2xl space-y-5 text-left relative">
            <div className="border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D27] mb-1">
                <Lock className="w-4 h-4" /> <span>Admin Authentication</span>
              </div>
              <h2 className="text-xl font-black text-[#0B132B]">Sign In to Admin Portal</h2>
            </div>

            {authError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" /><span>{authError}</span>
              </div>
            )}
            {authSuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>{authSuccess}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Admin Email <span className="text-[#FF4D27]">*</span></label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input type="email" required placeholder="admin@hamsasoham.com" value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#FF4D27] focus:bg-white outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Password <span className="text-[#FF4D27]">*</span></label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input type={showPassword ? "text" : "password"} required placeholder="••••••••••••"
                    value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#FF4D27] focus:bg-white outline-none transition-all" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button type="submit" disabled={authLoading}
                className="w-full py-3 rounded-xl bg-[#0B132B] hover:bg-slate-800 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-60">
                {authLoading ? <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>Authenticating...</span></>
                  : <><span>Sign In to Dashboard</span><ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // VIEW 2: DASHBOARD
  // ============================================================================
  return (
    <div className="min-h-screen bg-[#F4F6F9] text-slate-900 font-sans">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#0B132B] text-white font-bold text-xs shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-bottom duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center group focus:outline-none select-none cursor-pointer">
              <img src={logoImg} alt="HAMSA SOHAM Logo" className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
            </Link>
            <span className="px-2.5 py-1 rounded-full bg-[#0B132B] text-white text-[10px] font-extrabold uppercase tracking-wider">Admin Portal</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs font-extrabold text-[#0B132B]">{currentAdmin?.name || "Administrator"}</span>
              <span className="text-[11px] text-slate-500 font-mono">{currentAdmin?.email || "admin@hamsasoham.com"}</span>
            </div>
            {activeTab === "contacts" && (
              <>
                <button onClick={fetchInquiries} disabled={isLoadingInquiries} title="Refresh"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer">
                  <RefreshCw className={`w-4 h-4 ${isLoadingInquiries ? "animate-spin text-[#FF4D27]" : ""}`} />
                </button>
                <button onClick={handleExportCSV} title="Export CSV"
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer">
                  <Download className="w-3.5 h-3.5 text-slate-600" /><span className="hidden md:inline">Export CSV</span>
                </button>
              </>
            )}
            {activeTab === "testimonials" && (
              <button onClick={fetchTestimonials} disabled={isLoadingTestimonials} title="Refresh"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer">
                <RefreshCw className={`w-4 h-4 ${isLoadingTestimonials ? "animate-spin text-[#FF4D27]" : ""}`} />
              </button>
            )}
            <button onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer">
              <LogOut className="w-3.5 h-3.5 text-rose-600" /><span>Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Body: Sidebar + Content */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-8 flex gap-6 items-start">

        {/* ── Sidebar ── */}
        <aside className="w-52 shrink-0 sticky top-24">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3 space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 pb-2">Navigation</p>
            <button onClick={() => setActiveTab("contacts")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${activeTab === "contacts" ? "bg-[#0B132B] text-white shadow-sm" : "text-slate-600 hover:bg-slate-100"}`}>
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Contacts</span>
              {stats.new > 0 && (
                <span className={`ml-auto text-[10px] font-black px-1.5 py-0.5 rounded-full ${activeTab === "contacts" ? "bg-[#FF4D27] text-white" : "bg-rose-100 text-rose-700"}`}>
                  {stats.new}
                </span>
              )}
            </button>
            <button onClick={() => setActiveTab("testimonials")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${activeTab === "testimonials" ? "bg-[#0B132B] text-white shadow-sm" : "text-slate-600 hover:bg-slate-100"}`}>
              <Star className="w-4 h-4 shrink-0" />
              <span>Testimonials</span>
              <span className={`ml-auto text-[10px] font-black px-1.5 py-0.5 rounded-full ${activeTab === "testimonials" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
                {testimonials.length}
              </span>
            </button>
          </div>

          {/* Quick stats (contacts only) */}
          {activeTab === "contacts" && (
            <div className="mt-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3 space-y-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 pb-1">Quick Stats</p>
              {[
                { label: "Total", value: stats.total, color: "text-[#0B132B]" },
                { label: "New", value: stats.new, color: "text-rose-600" },
                { label: "Contacted", value: stats.contacted, color: "text-amber-600" },
                { label: "In Progress", value: stats.inProgress, color: "text-blue-600" },
                { label: "Closed", value: stats.closed, color: "text-emerald-600" },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex items-center justify-between px-1">
                  <span className="text-xs text-slate-500 font-semibold">{label}</span>
                  <span className={`text-sm font-black ${color}`}>{value}</span>
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* ── Main Content ── */}
        <div className="flex-1 min-w-0 space-y-6 text-left pb-16">

          {/* ────────────── CONTACTS TAB ────────────── */}
          {activeTab === "contacts" && (
            <>
              {/* Search & Filters */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-wrap items-center justify-between gap-4">
                <div className="relative flex-1 min-w-[240px] max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input type="text" placeholder="Search name, org, email, mobile, city..."
                    value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#FF4D27] outline-none transition-all" />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="font-bold text-slate-500 hidden sm:inline">Product:</span>
                    <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}
                      className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-[#FF4D27] text-xs">
                      <option value="All">All Products</option>
                      <option value="e_Kshitiz">e_Kshitiz</option>
                      <option value="e_Kshitiz Lite">e_Kshitiz Lite</option>
                      <option value="e_Drishti">e_Drishti</option>
                      <option value="e_Drishti Lite">e_Drishti Lite</option>
                      <option value="HWAI">HWAI</option>
                      <option value="Complete Healthcare IT Suite">Complete Suite</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                    {["All","New","Contacted","In Progress","Closed"].map((st) => (
                      <button key={st} onClick={() => setSelectedStatus(st)}
                        className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${selectedStatus === st ? "bg-white text-[#0B132B] shadow-2xs font-extrabold" : "text-slate-500 hover:text-slate-800"}`}>
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inquiries Table */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
                {filteredInquiries.length === 0 ? (
                  <div className="p-12 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto"><Search className="w-6 h-6" /></div>
                    <h3 className="text-base font-bold text-slate-800">No matching inquiries found</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      {searchQuery || selectedProduct !== "All" || selectedStatus !== "All"
                        ? "Try resetting your search filters." : "No contact submissions recorded yet."}
                    </p>
                    {(searchQuery || selectedProduct !== "All" || selectedStatus !== "All") && (
                      <button onClick={() => { setSearchQuery(""); setSelectedProduct("All"); setSelectedStatus("All"); }}
                        className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer">
                        Clear Filters
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-extrabold text-[11px]">
                          <th className="py-3.5 px-4">Date</th>
                          <th className="py-3.5 px-4">Requester</th>
                          <th className="py-3.5 px-4">Organization & City</th>
                          <th className="py-3.5 px-4">Contact Details</th>
                          <th className="py-3.5 px-4">Product & Beds</th>
                          <th className="py-3.5 px-4">Status</th>
                          <th className="py-3.5 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium">
                        {filteredInquiries.map((inq) => {
                          const id = inq._id || inq.id;
                          const dateFormatted = inq.createdAt
                            ? new Date(inq.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
                            : "Recently";
                          return (
                            <tr key={id} onClick={() => { setSelectedInquiry(inq); setEditingNotes(inq.adminNotes || ""); setIsDetailModalOpen(true); }}
                              className="hover:bg-slate-50/80 transition-colors cursor-pointer group">
                              <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                                <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-slate-400" /><span>{dateFormatted}</span></div>
                              </td>
                              <td className="py-3.5 px-4">
                                <div className="font-extrabold text-[#0B132B] group-hover:text-[#FF4D27] transition-colors">{inq.name}</div>
                                <div className="text-[11px] text-slate-500">{inq.designation}</div>
                              </td>
                              <td className="py-3.5 px-4">
                                <div className="font-bold text-slate-800">{inq.organization}</div>
                                <div className="text-[11px] text-slate-500">{inq.city || inq.hospitalType}</div>
                              </td>
                              <td className="py-3.5 px-4 whitespace-nowrap">
                                <div className="text-slate-800 font-mono text-[11px]">{inq.email}</div>
                                <div className="text-slate-500 font-mono text-[11px]">{inq.mobile}</div>
                              </td>
                              <td className="py-3.5 px-4 whitespace-nowrap">
                                <span className="inline-block px-2.5 py-1 rounded-lg bg-orange-50 text-[#FF4D27] font-bold text-[11px] border border-orange-100">{inq.product}</span>
                                {inq.beds && <span className="block text-[11px] text-slate-500 mt-0.5">{inq.beds}</span>}
                              </td>
                              <td className="py-3.5 px-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                <select value={inq.status || "New"} onChange={(e) => handleUpdateStatus(id, e.target.value)}
                                  className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold border cursor-pointer focus:outline-none ${getStatusBadge(inq.status || "New")}`}>
                                  <option value="New">New</option>
                                  <option value="Contacted">Contacted</option>
                                  <option value="In Progress">In Progress</option>
                                  <option value="Closed">Closed</option>
                                </select>
                              </td>
                              <td className="py-3.5 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center justify-end gap-1.5">
                                  <button onClick={() => { setSelectedInquiry(inq); setEditingNotes(inq.adminNotes || ""); setIsDetailModalOpen(true); }}
                                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer">
                                    <Eye className="w-3.5 h-3.5" />
                                  </button>
                                  <button onClick={(e) => handleDeleteInquiry(id, e)}
                                    className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer">
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}

          {/* ────────────── TESTIMONIALS TAB ────────────── */}
          {activeTab === "testimonials" && (
            <div className="space-y-5">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-black text-[#0B132B]">Testimonials</h2>
                  <p className="text-xs text-slate-500 mt-0.5">These appear in the "Loved by Healthcare Professionals" section on the home page.</p>
                </div>
                <button onClick={openAddTestimonial}
                  className="px-4 py-2.5 rounded-xl bg-[#FF4D27] hover:bg-[#E03A14] text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-[#FF4D27]/20 transition-all cursor-pointer">
                  <PlusCircle className="w-4 h-4" /><span>Add Testimonial</span>
                </button>
              </div>

              {/* Add / Edit Form */}
              {testimonialFormOpen && (
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <h3 className="text-base font-black text-[#0B132B]">
                      {editingTestimonialId ? "Edit Testimonial" : "Add New Testimonial"}
                    </h3>
                    <button onClick={() => setTestimonialFormOpen(false)} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 cursor-pointer"><X className="w-4 h-4" /></button>
                  </div>
                  <form onSubmit={handleSaveTestimonial} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Name / Hospital Name *</label>
                        <input type="text" required placeholder="e.g. Dr. Rajesh Kumar or Apollo Hospital"
                          value={testimonialForm.name} onChange={(e) => setTestimonialForm((f) => ({ ...f, name: e.target.value }))}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Designation / Position <span className="text-slate-400 font-normal">(optional)</span></label>
                        <input type="text" placeholder="e.g. Medical Director"
                          value={testimonialForm.position} onChange={(e) => setTestimonialForm((f) => ({ ...f, position: e.target.value }))}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Hospital / Location *</label>
                        <input type="text" required placeholder="e.g. Akhandjyoti Eye Hospital, Patna"
                          value={testimonialForm.hospital} onChange={(e) => setTestimonialForm((f) => ({ ...f, hospital: e.target.value }))}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Logo Image URL <span className="text-slate-400 font-normal">(optional)</span></label>
                        <input type="url" placeholder="https://example.com/logo.png"
                          value={testimonialForm.logoUrl} onChange={(e) => setTestimonialForm((f) => ({ ...f, logoUrl: e.target.value }))}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors" />
                        {testimonialForm.logoUrl && (
                          <img src={testimonialForm.logoUrl} alt="preview" className="h-10 mt-1 object-contain rounded border border-slate-200 p-1 bg-white"
                            onError={(e) => { e.target.style.display = "none"; }} />
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Testimonial Quote *</label>
                      <textarea rows={3} required placeholder="Enter the testimonial text..."
                        value={testimonialForm.quote} onChange={(e) => setTestimonialForm((f) => ({ ...f, quote: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors resize-none" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Card Backdrop Color</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {BACKDROP_PRESETS.map((p) => (
                            <button key={p.value} type="button" title={p.label}
                              onClick={() => setTestimonialForm((f) => ({ ...f, backdropColor: p.value }))}
                              className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${testimonialForm.backdropColor === p.value ? "border-slate-900 scale-110" : "border-transparent hover:scale-105"}`}
                              style={{ backgroundColor: p.value }} />
                          ))}
                          <input type="color" value={testimonialForm.backdropColor}
                            onChange={(e) => setTestimonialForm((f) => ({ ...f, backdropColor: e.target.value }))}
                            className="w-7 h-7 rounded-full cursor-pointer border border-slate-200" title="Custom color" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Card Tilt</label>
                        <select value={testimonialForm.backdropRotate}
                          onChange={(e) => setTestimonialForm((f) => ({ ...f, backdropRotate: e.target.value }))}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none focus:border-[#FF4D27] mt-1">
                          <option value="rotate-6">Tilt Right</option>
                          <option value="-rotate-6">Tilt Left</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-700">Sort Order</label>
                          <input type="number" min={0} value={testimonialForm.sortOrder}
                            onChange={(e) => setTestimonialForm((f) => ({ ...f, sortOrder: parseInt(e.target.value) || 0 }))}
                            className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none focus:border-[#FF4D27] mt-1" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-700">Active</label>
                          <button type="button" onClick={() => setTestimonialForm((f) => ({ ...f, isActive: !f.isActive }))}
                            className={`mt-1 flex items-center gap-2 px-3 py-2 rounded-xl border font-bold text-xs cursor-pointer transition-all ${testimonialForm.isActive ? "bg-emerald-50 border-emerald-300 text-emerald-700" : "bg-slate-100 border-slate-200 text-slate-500"}`}>
                            {testimonialForm.isActive ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                            {testimonialForm.isActive ? "Visible" : "Hidden"}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                      <button type="submit" disabled={isSavingTestimonial}
                        className="px-5 py-2.5 rounded-xl bg-[#0B132B] hover:bg-slate-800 text-white font-bold text-xs transition-all cursor-pointer disabled:opacity-60 flex items-center gap-2">
                        {isSavingTestimonial ? <><span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>Saving...</span></> : <span>{editingTestimonialId ? "Save Changes" : "Add Testimonial"}</span>}
                      </button>
                      <button type="button" onClick={() => setTestimonialFormOpen(false)}
                        className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Testimonials List */}
              {isLoadingTestimonials ? (
                <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center">
                  <RefreshCw className="w-6 h-6 text-[#FF4D27] animate-spin mx-auto mb-3" />
                  <p className="text-sm font-semibold text-slate-500">Loading testimonials...</p>
                </div>
              ) : testimonials.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center space-y-3">
                  <Star className="w-10 h-10 text-slate-300 mx-auto" />
                  <h3 className="font-bold text-slate-800">No testimonials yet</h3>
                  <p className="text-xs text-slate-500">Add your first testimonial to show it on the home page.</p>
                  <button onClick={openAddTestimonial}
                    className="px-4 py-2 rounded-xl bg-[#FF4D27] text-white font-bold text-xs cursor-pointer hover:bg-[#E03A14] transition-colors">
                    Add First Testimonial
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {testimonials.map((t) => (
                    <div key={t.id} className={`bg-white rounded-2xl border shadow-sm p-4 flex items-start gap-4 transition-all ${t.isActive ? "border-slate-200/90" : "border-slate-200/50 opacity-60"}`}>
                      {/* Color swatch */}
                      <div className="w-10 h-10 rounded-xl shrink-0 shadow-sm" style={{ backgroundColor: t.backdropColor }} />

                      {/* Logo preview */}
                      {t.logoUrl ? (
                        <div className="w-10 h-10 rounded-xl shrink-0 border border-slate-200 bg-white p-1 flex items-center justify-center overflow-hidden">
                          <img src={t.logoUrl} alt={t.name} className="w-full h-full object-contain"
                            onError={(e) => { e.target.style.display = "none"; }} />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-white text-xs font-black" style={{ backgroundColor: t.backdropColor }}>
                          {(t.name || "?").slice(0, 2).toUpperCase()}
                        </div>
                      )}

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-extrabold text-sm text-[#0B132B] truncate">{t.name}</span>
                          {t.position && <span className="text-xs text-slate-400 italic">{t.position}</span>}
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${t.isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                            {t.isActive ? "Active" : "Hidden"}
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold">#{t.sortOrder}</span>
                        </div>
                        <p className="text-xs font-bold text-[#FF4D27] mt-0.5">{t.hospital}</p>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">"{t.quote}"</p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button onClick={() => handleToggleActive(t)} title={t.isActive ? "Hide" : "Show"}
                          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${t.isActive ? "bg-emerald-50 hover:bg-emerald-100 text-emerald-600" : "bg-slate-100 hover:bg-slate-200 text-slate-500"}`}>
                          {t.isActive ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                        </button>
                        <button onClick={() => openEditTestimonial(t)} title="Edit"
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDeleteTestimonial(t.id)} title="Delete"
                          className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Contact Detail Modal */}
      {isDetailModalOpen && selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 text-left">
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF4D27]">Inquiry Details</span>
                <h3 className="text-xl font-black text-[#0B132B]">{selectedInquiry.name}</h3>
                <p className="text-xs text-slate-500">{selectedInquiry.designation} at <span className="font-bold text-slate-700">{selectedInquiry.organization}</span></p>
              </div>
              <button onClick={() => setIsDetailModalOpen(false)} className="p-2 rounded-full bg-white hover:bg-slate-100 text-slate-500 border border-slate-200 cursor-pointer"><X className="w-4 h-4" /></button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Mail className="w-3.5 h-3.5 text-[#FF4D27]" />, label: "Email", content: <a href={`mailto:${selectedInquiry.email}`} className="font-bold text-[#0B132B] hover:text-[#FF4D27] underline block truncate">{selectedInquiry.email}</a> },
                  { icon: <Phone className="w-3.5 h-3.5 text-[#FF4D27]" />, label: "Mobile", content: <a href={`tel:${selectedInquiry.mobile}`} className="font-bold text-[#0B132B] hover:text-[#FF4D27]">{selectedInquiry.mobile}</a> },
                  { icon: <Hospital className="w-3.5 h-3.5 text-slate-500" />, label: "Hospital Type", content: <div className="font-bold text-slate-800">{selectedInquiry.hospitalType}{selectedInquiry.beds && ` (${selectedInquiry.beds})`}</div> },
                  { icon: <Layers className="w-3.5 h-3.5 text-[#FF4D27]" />, label: "Product", content: <div className="font-extrabold text-[#FF4D27]">{selectedInquiry.product}</div> },
                  { icon: <FileSpreadsheet className="w-3.5 h-3.5 text-slate-500" />, label: "Current HIS", content: <div className="font-bold text-slate-800">{selectedInquiry.currentHis || "Not specified"}</div> },
                  { icon: <Clock className="w-3.5 h-3.5 text-slate-500" />, label: "Submitted", content: <div className="font-bold text-slate-800">{new Date(selectedInquiry.createdAt).toLocaleString()}</div> },
                ].map(({ icon, label, content }) => (
                  <div key={label} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5">{icon}<span>{label}</span></span>
                    {content}
                  </div>
                ))}
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5 text-slate-500" /><span>Message</span></span>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedInquiry.message || "No message provided."}</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Internal Notes (Private)</span>
                  <button onClick={handleSaveNotes} disabled={isSavingNotes}
                    className="px-3 py-1 rounded-lg bg-[#0B132B] hover:bg-slate-800 text-white font-bold text-[11px] transition-colors cursor-pointer disabled:opacity-60">
                    {isSavingNotes ? "Saving..." : "Save Notes"}
                  </button>
                </div>
                <textarea rows={3} value={editingNotes} onChange={(e) => setEditingNotes(e.target.value)}
                  placeholder="Record call updates, follow-up dates, or pricing quotes..."
                  className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#FF4D27] outline-none text-xs text-slate-800 resize-none font-medium" />
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-700 block">Change Status</span>
                <div className="flex flex-wrap gap-2">
                  {["New","Contacted","In Progress","Closed"].map((st) => (
                    <button key={st} onClick={() => handleUpdateStatus(selectedInquiry._id || selectedInquiry.id, st)}
                      className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${selectedInquiry.status === st ? "bg-[#0B132B] text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-700"}`}>
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
              <a href={`mailto:${selectedInquiry.email}?subject=Demo Request: Hamsa Soham Healthcare Solutions&body=Dear ${selectedInquiry.name},%0D%0A%0D%0AThank you for reaching out regarding ${selectedInquiry.product} for ${selectedInquiry.organization}.`}
                className="px-4 py-2 rounded-xl bg-[#FF4D27] hover:bg-[#E03A14] text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer">
                <Mail className="w-3.5 h-3.5" /><span>Email Client</span>
              </a>
              <button onClick={() => setIsDetailModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors cursor-pointer">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
