export const IntroSection = () => {
  return (
    <div className="flex flex-col gap-8 text-KVS-white items-center justify-center relative backdrop-blur-sm py-16">
      <div className="absolute-center w-screen shadow-KVS-primary shadow bg-KVS-primary bg-opacity-40 h-full" />
      <h2 className="section-header">
        KVS - Eksperter i Seksjonsfelling av Trær.
      </h2>
      <p className="large-paragraph max-w-3xl">
        Vi er din pålitelige partner når det gjelder profesjonell
        seksjonsfelling av trær. Med solid erfaring og dedikerte eksperter er vi
        klare til å håndtere alle typer trær, uansett størrelse og kompleksitet.
      </p>
      <h2 className="section-header">Hvorfor velge oss:</h2>
      <div className="flex flex-wrap gap-8 text-center justify-center">
        <p className="large-paragraph max-w-lg">
          Erfarne fagfolk: Vårt team består av erfarne arborister og fagfolk som
          sikrer kvalitet og sikkerhet i alle prosjekter.
        </p>
        <p className="large-paragraph max-w-lg">
          Moderne utstyr: Vi benytter det nyeste innen utstyr og teknologi for å
          utføre oppgavene våre på en effektiv og presis måte.
        </p>
        <p className="large-paragraph max-w-lg">
          Kundetilfredshet: Din tilfredshet er vår prioritet. Vi streber etter å
          levere tjenester som overstiger dine forventninger.
        </p>
      </div>
    </div>
  );
};
