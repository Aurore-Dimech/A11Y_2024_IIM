import filter from "../components/js/filter";
import FilterGroup from "../components/js/FilterGroup";

const filterList = ()=>  {

    const categories = [
        {
            title: "ACCES RAPIDE",
            items : [
                {id: 'Documents numériques',name: 'Documents numériques',label: 'Documents numériques',count : 241} ,
                {id: 'Disponibles',name: 'Disponibles',label: 'Disponibles',count : 117},
                {id: 'Nouveautés',name: 'Nouveautés',label: 'Nouveautés',count : 7},
            ]
        }, 
        {
            title: 'LOCALISATION',
            items: [
              { id: 'Bibliothèque-Louis Nucéra', name: 'Bibliothèque-Louis-Nucéra', label: 'Bibliothèque Louis Nucéra', count: 241 },
              { id: 'Conservatoire de Nice', name: 'Conservatoire-de-Nice', label: 'Conservatoire de Nice', count: 117 },
              { id: 'Bibliothèque-de-Saint-Roch', name: 'Bibliothèque-de-Saint-Roch', label: 'Bibliothèque de Saint-Roch', count: 36 },
              { id: 'Bib’Mobile', name: 'Bib’Mobile', label: 'Bib’Mobile', count: 36 }
            ]
        },
        {
          title: 'SUPPORT',
          items: [
            { id: 'Disque-Compact', name: 'Disque-Compact', label: 'Disque Compact', count: 241 },
            { id: 'Disque-33t', name: 'Disque-33t', label: 'Disque 33t', count: 117 },
            { id: 'Bande-Dessinées', name: 'Bande-Dessinées', label: 'Bande Dessinées', count: 36 },
            { id: 'Disque-45t', name: 'Disque-45t', label: 'Disque 45t', count: 36 }
          ]
        },
        {
          title: 'TYPE DE DOCUMENT',
          items: [
            { id: 'Document-Sonore', name: 'Document-Sonore', label: 'Document Sonore', count: 241 },
            { id: 'Disponibles', name: 'Disponibles', label: 'Disponibles', count: 117 },
            { id: 'Conservatoire-de-Nice', name: 'Conservatoire-de-Nice', label: 'Conservatoire de Nice', count: 36 }
          ]
        },
        {
          title: 'ACCES RAPIDE',
          items: [
            { id: 'Documents numérique', name: 'Documents numérique', label: 'Documents numérique', count: 241 },
            { id: 'Livre', name: 'Livre', label: 'Livre', count: 117 },
            { id: 'Livre-Numérique', name: 'Livre-Numérique', label: 'Livre Numérique', count: 36 },
            { id: 'Vidéo', name: 'Vidéo', label: 'Vidéo', count: 36 }
          ]
        }
    ];
    return (
        <div className="container_filter">
          <p>Affiner votre recherche</p>
          <FilterGroup categories={categories} />
        </div>
      );
};

export default filterList;


