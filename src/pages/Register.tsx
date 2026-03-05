import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Phone, Mail, Lock, Eye, EyeOff, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import motorcycleBg from "@/assets/motorcycle-bg.jpg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", form);
  };

  const inputClass =
    "w-full bg-secondary/50 border border-border rounded-lg pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="px-8 py-5">
        <Link to="/login" className="flex items-center gap-2">
          <Shield className="w-7 h-7 text-primary" />
          <span className="text-xl font-heading font-bold text-foreground tracking-wide">
            Motor<span className="text-primary">Safe</span>
          </span>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 pb-8">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left - Branding */}
          <div className="w-full lg:w-[45%] flex flex-col">
            {/* Hero card with image */}
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border">
              <div className="p-8 pb-0">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                  LUÔN ĐỒNG HÀNH CÙNG BẠN
                </span>
                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-4">
                  An tâm trên mọi<br />cung đường.
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                  Tham gia cùng hàng ngàn biker tin tưởng MotorSafe để được cứu hộ và sửa chữa khẩn cấp nhanh chóng.
                </p>
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Trung tâm điều phối 24/7 Đà Nẵng.</span>
                </div>
              </div>
              {/* Motorcycle image */}
              <div className="px-8 pb-8">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={motorcycleBg}
                    alt="Xe mô tô cứu hộ MotorSafe"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Register Form */}
          <div className="w-full lg:w-[45%]">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-1">
              Tạo Tài Khoản
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Hoàn tất đăng ký chỉ trong chưa đầy 2 phút.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row: Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Họ và Tên</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Nhập họ tên"
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Số Điện Thoại</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Địa Chỉ Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Nhập email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mật Khẩu</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => updateField("password", e.target.value)}
                    className={`${inputClass} !pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Xác Nhận Mật Khẩu</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.confirmPassword}
                    onChange={(e) => updateField("confirmPassword", e.target.value)}
                    className={`${inputClass} !pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full py-3 text-base font-semibold rounded-full h-12 text-primary-foreground gap-2"
              >
                Đăng Ký <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Login link */}
            <p className="text-center text-sm text-muted-foreground">
              Đã có tài khoản?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Đăng nhập tại đây
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-5 text-center border-t border-border">
        <p className="text-xs text-muted-foreground">
          © 2026 MotorSafe Rescue Services. Bảo lưu mọi quyền. Cứu hộ xe máy chuyên nghiệp 24/7.
        </p>
      </footer>
    </div>
  );
};

export default Register;
