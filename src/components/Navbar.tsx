type Props = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function Navbar({ darkMode, setDarkMode }: Props) {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold">Uchenna Akuchie</h1>

        <div className="flex gap-6 items-center">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded-lg"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
