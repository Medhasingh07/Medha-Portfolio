export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} Medha Singh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
