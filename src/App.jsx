import logo from './aventique.svg';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <div className="h-screen">
      <header className="p-4">
        <img width={250} height={250} src={logo} alt="Aventique's logo" />
      </header>
      <main className="flex flex-col items-center justify-between p-4">
        <h1 className="pt-20 text-3xl font-style text-slate-700 font-light tracking-wider">
          Photo Gallery
        </h1>
        <h2 className="pt-4 text-xl font-primary ">
          A photograph keeps a moment from running away
        </h2>
        <p className="pt-4 text-xl font-primary ">Browse our curated albums</p>
        <nav className="pt-16">
          <Link to="albums">
            <a className="rounded p-2 bg-slate-700 text-orange-200 font-primary tracking-wide font-semibold hover:bg-slate-600 hover:text-white">
              Albums
            </a>
          </Link>
        </nav>
      </main>
    </div>
  );
}
