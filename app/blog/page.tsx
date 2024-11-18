import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function Blog() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Coming Soon</h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I&apos;ll be sharing my thoughts and experiences about software development, 
              blockchain technology, and other technical discoveries here soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}