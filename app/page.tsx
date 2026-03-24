import { SignInButton, SignUpButton } from "@clerk/nextjs";
import {
  Link2,
  BarChart3,
  Zap,
  Shield,
  Copy,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Zap,
    title: "Instant Shortening",
    description:
      "Paste any long URL and get a clean, shareable short link in milliseconds.",
  },
  {
    icon: BarChart3,
    title: "Click Analytics",
    description:
      "Track how many times each link is clicked. See what's working at a glance.",
  },
  {
    icon: Copy,
    title: "One-Click Copy",
    description:
      "Copy your short links instantly with a single click — no fuss, no extra steps.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Share your links on social media, email, SMS, or anywhere you communicate.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your links are stored safely and resolve reliably, every single time.",
  },
  {
    icon: Link2,
    title: "Manage All Links",
    description:
      "View, edit, and delete all your shortened links from one clean dashboard.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 px-6 py-24 text-center">
        <Badge variant="secondary" className="text-xs uppercase tracking-wider">
          Free to use
        </Badge>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Shorten links. <br className="hidden sm:block" />
          Share smarter.
        </h1>
        <p className="max-w-lg text-base text-muted-foreground sm:text-lg">
          LinkShortener turns long, unwieldy URLs into clean short links you can
          share anywhere — with built-in click tracking so you always know
          what&apos;s performing.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <SignUpButton mode="modal">
            <Button size="lg" className="px-6">
              Get started free
            </Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button size="lg" variant="outline" className="px-6">
              Sign in
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight">
            Everything you need
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="flex flex-col gap-0">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Icon className="size-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t px-6 py-20 text-center">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight">
          Ready to shorten your first link?
        </h2>
        <p className="mb-6 text-muted-foreground">
          Create a free account and start managing your links today.
        </p>
        <SignUpButton mode="modal">
          <Button size="lg" className="px-8">
            Create free account
          </Button>
        </SignUpButton>
      </section>
    </main>
  );
}
