import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-charcoal section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* WasabiAI */}
          <div>
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/Wasabi_Logo (1).png"
                alt="WasabiAI Logo"
                width={120}
                height={120}
                className="h-12 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="text-slate text-sm">
              Empowering the next generation with AI
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate hover:text-electric-green transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate hover:text-electric-green transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate hover:text-electric-green transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate hover:text-electric-green transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="glass p-2 rounded-full hover:bg-electric-green hover:text-black transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate text-sm">
              <li>
                <a href="mailto:contact@wasabiai.com" className="hover:text-electric-green transition-colors">
                  contact@wasabiai.com
                </a>
              </li>
              <li>India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate text-sm">
          <p>© 2025 WasabiAI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-electric-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-electric-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
