"use client"

import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10 pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium text-sm">Full Stack Developer & AI Enthusiast</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">Abhivir Singh</h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              B.Tech (CSE) + M.Tech (AI) student at RGIPT. Passionate about building scalable web applications and
              exploring artificial intelligence. Winner of HackAGeeek 2024.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="text-2xl font-bold text-primary">8.04</p>
                <p className="text-sm text-muted-foreground">CGPA</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-sm text-muted-foreground">Internships</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="text-2xl font-bold text-primary">4+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>
          {/* Right Image Placeholder */}
          <div className="flex justify-center">
            <Image src="/profile_photo.jpeg" alt="Hero Image" width={400} height={400} className="profile-img w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
