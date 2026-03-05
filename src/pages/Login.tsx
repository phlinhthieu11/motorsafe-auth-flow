import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Lock, Eye, EyeOff, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import motorcycleBg from "@/assets/motorcycle-bg.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { phone, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${motorcycleBg})` }}
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-heading font-bold text-foreground tracking-wide">
                Motor<span className="text-primary">Safe</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-sm">
              Dịch vụ cứu hộ xe máy chuyên nghiệp
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="tel"
                placeholder="Số điện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-lg pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-lg pl-11 pr-12 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full py-3 text-base font-semibold rounded-lg h-12 text-primary-foreground"
            >
              Đăng Nhập
            </Button>
          </form>

          {/* Register link */}
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Chưa có tài khoản?{" "}
            <Link to="/register" className="text-primary font-semibold hover:underline">
              Đăng ký ngay
            </Link>
          </p>

          {/* Footer badges */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Bảo mật 256-bit</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Headphones className="w-4 h-4 text-primary" />
              <span>Cứu hộ 24/7</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center mt-4 text-xs text-muted-foreground">
          © 2026 MotorSafe Rescue Services
        </p>
      </div>
    </div>
  );
};

export default Login;
