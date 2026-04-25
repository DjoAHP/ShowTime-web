import { useState } from "react";
import { Square, FileText, ExternalLink, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import BackgroundGradient from "@/components/BackgroundGradient";
// IMPORT DOCUMENTS GROUPES 
// --------- Chavabien --------- 
import chavabienSetlist from '@/assets/documents/chavabien/chavabien-setlist.jpg';
import chavabienFicheT from "@/assets/documents/chavabien/chavabien-fiche-tech.jpg";
// --------- Grp de Rock --------- 
import grpderockSetlist from "@/assets/documents/groupe-de-rock/grp-de-rock-setlist.jpg";

// Types
interface Document {
  id: string;
  name: string;
  type: "image" | "pdf";
  url: string;
}

interface ConcertInfo {
  lieu: string;
  heureBalances: string;
  heureConcert: string;
  heureDebut: string;
  heureFin: string;
  documents: Document[];
}

interface GroupData {
  id: string;
  name: string;
  genre: string;
  concert: ConcertInfo;
}

// Data
const GROUPS_DATA: GroupData[] = [
  {
    id: "chavabien",
    name: "Chavabien",
    genre: "Variété / Pop",
    concert: {
      lieu: "Jard, Epernay",
      heureBalances: "16:00",
      heureConcert: "20:30",
      heureDebut: "21:00",
      heureFin: "22:00",
      documents: [
        {
          id: "1",
          name: "SetList-Chavabien.jpg",
          type: "image",
          url: chavabienSetlist,
        },
        {
          id: "2",
          name: "FicheTech-Chavabien.jpg",
          type: "image",
          url: chavabienFicheT,
        },
        {
          id: "3",
          name: "PlanDeScene-Chavabien.jpg",
          type: "image",
          url: "#",
        },
      ],
    },
  },
  {
    id: "rock",
    name: "Grp de Rock",
    genre: "Classic Rock / Hard Rock",
    concert: {
      lieu: "Jard, Epernay",
      heureBalances: "15:00",
      heureConcert: "22:00",
      heureDebut: "22:30",
      heureFin: "23:30",
      documents: [
        {
          id: "4",
          name: "SetList-GrpDeRock.jpg",
          type: "image",
          url: grpderockSetlist,
        },
        {
          id: "5",
          name: "FicheTech-GrpDeRock.jpg",
          type: "image",
          url: "#",
        },
        {
          id: "6",
          name: "PlanDeScene-GrpDeRock.jpg",
          type: "image",
          url: "#",
        },
      ],
    },
  },

  {
    id: "chenapan",
    name: "Chenapan Dub",
    genre: "Dub / Electro",
    concert: {
      lieu: "Jard, Epernay",
      heureBalances: "17:00",
      heureConcert: "23:00",
      heureDebut: "23:30",
      heureFin: "00:30",
      documents: [
        {
          id: "7",
          name: "SetList-Chenapan.jpg",
          type: "image",
          url: "#",
        },
        {
          id: "8",
          name: "FicheTech-Chenapan.jpg",
          type: "image",
          url: "#",
        },
        {
          id: "9",
          name: "PlanDeScene-Chenapan.jpg",
          type: "image",
          url: "#",
        },
      ],
    },
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(GROUPS_DATA[0].id);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  const activeGroup = GROUPS_DATA.find((g) => g.id === activeTab)!;

  return (
    <div className="h-screen flex flex-col font-sans text-slate-300 overflow-hidden bg-transparent">
      <BackgroundGradient />
      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-40 shrink-0">
        <div className="max-w-7xl mx-auto flex">
          {GROUPS_DATA.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`flex-1 py-6 px-4 text-sm font-bold tracking-[0.2em] uppercase transition-all relative ${
                activeTab === group.id
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-400"
              }`}
            >
              {group.name}
              {activeTab === group.id && (
                <motion.div
                  layoutId="navUnderlineDesktop"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      <div className="text-center mt-8 md:mt-6 mb-2 md:-mb-4 shrink-0">
        <h1 className="text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] text-slate-500 uppercase opacity-50 px-4">
          Fête de la musique 2026
        </h1>
      </div>

      <main className="flex-1 flex flex-col items-center justify-start md:justify-center p-4 md:p-12 lg:px-24 overflow-y-auto md:overflow-hidden custom-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 py-4"
          >
            {/* Infos Section */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-8">
              <section className="text-center md:text-left">
                <span className="text-[9px] md:text-[10px] font-black tracking-widest text-slate-600 uppercase mb-1 block">
                  Lieu du concert
                </span>
                <h2 className="text-2xl md:text-5xl font-light text-white tracking-tight leading-tight">
                  {activeGroup.concert.lieu}
                </h2>
              </section>

              <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/10">
                <section className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-blue-500/[0.03] border border-blue-500/10">
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-blue-400/60 uppercase mb-2 md:mb-4 block">
                    Balances
                  </span>
                  <p className="text-2xl md:text-4xl font-light text-white">
                    {activeGroup.concert.heureBalances}
                  </p>
                </section>

                <section className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-purple-500/[0.03] border border-purple-500/10">
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-purple-400/60 uppercase mb-2 md:mb-4 block">
                    Convocation
                  </span>
                  <p className="text-2xl md:text-4xl font-light text-white">
                    {activeGroup.concert.heureConcert}
                  </p>
                </section>

                <section className="col-span-2 p-4 md:p-6 rounded-xl md:rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/10 flex justify-between items-center">
                  <div>
                    <span className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-emerald-400/60 uppercase mb-2 md:mb-3 block">
                      Début
                    </span>
                    <p className="text-2xl md:text-4xl font-light text-white">
                      {activeGroup.concert.heureDebut}
                    </p>
                  </div>
                  <div className="h-8 md:h-12 w-px bg-emerald-500/20 mx-2 md:mx-4" />
                  <div className="text-right">
                    <span className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-emerald-400/60 uppercase mb-2 md:mb-3 block">
                      Fin
                    </span>
                    <p className="text-2xl md:text-4xl font-light text-white">
                      {activeGroup.concert.heureFin}
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Documents Section */}
            <div className="flex flex-col justify-center pb-8 md:pb-0">
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-4 md:mb-6 block px-2 text-center md:text-left">
                Documents Techniques
              </span>
              <div className="grid grid-cols-1 gap-2 md:gap-3">
                {activeGroup.concert.documents.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc)}
                    className="w-full flex items-center justify-between p-4 group transition-all bg-white/[0.02] border border-white/5 hover:border-white/20 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-slate-600 group-hover:text-blue-400 transition-colors">
                        0{doc.id}
                      </span>
                      <span className="text-sm md:text-lg font-medium text-slate-400 group-hover:text-white transition-colors">
                        {doc.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-all">
                      <ExternalLink
                        size={14}
                        className="text-slate-500 group-hover:text-white"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-2xl pb-3 pt-3 shrink-0 px-2">
        <div className="flex gap-1">
          {GROUPS_DATA.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`flex-1 py-4 px-2 text-[10px] font-black tracking-widest uppercase transition-all relative rounded-xl ${
                activeTab === group.id ? "text-white" : "text-slate-600"
              }`}
            >
              <span className="relative z-10">{group.name}</span>
              {activeTab === group.id && (
                <motion.div
                  layoutId="mobileNavBg"
                  className="absolute inset-0 bg-white/5 rounded-xl border border-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {activeTab === group.id && (
                <motion.div
                  layoutId="navUnderlineMobile"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Modal / Document Viewer */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] glass rounded-3xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <h3 className="font-semibold text-white">{selectedDoc.name}</h3>
                <div className="flex gap-2">
                  <a
                    href={selectedDoc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <button
                    onClick={() => setSelectedDoc(null)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                  >
                    <Square size={20} className="rotate-45" />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-slate-900 flex items-center justify-center">
                <div className="flex items-center justify-center w-[80vw] h-[80vh] bg-slate-900 rounded-lg">
                  {selectedDoc.type === "image" ? (
                    <img
                      src={selectedDoc.url}
                      alt={selectedDoc.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-slate-300">
                      <FileText
                        size={48}
                        className="mb-4"
                      />
                      <p className="text-center">
                        Le fichier PDF ne peut pas être prévisualisé directement
                        <br className="hidden sm:inline" />
                        ici dans cette version.
                      </p>
                      <a
                        href={selectedDoc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded flex items-center gap-2"
                      >
                        <Download size={16} />
                        Ouvrir / Télécharger le PDF
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
