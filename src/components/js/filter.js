
import React from "react";
import "../../App.css";
import "../css/Filter.css";
import SearchedBooksCard from "../../components/js/SearchedBooksCard";
import bookList from "../../data/bookList";
import chevronRight from "../../images/Chevron-right.png";


import {FilterGroup} from "../js/FilterGroup";

const filter = ()=>  {

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
            { id: 'Livre', name: 'Livre', label: 'Livre', count: 117 },
            { id: 'Livre-numérique', name: 'Livre-numérique', label: 'Livre Numérique', count: 36 },
            { id: 'Video', name: 'Video', label: 'Vidéo', count: 36 }
          ]
        },
        {
          title: 'SECTION',
          items: [
            { id: 'Musique', name: 'Musique', label: 'Musique', count: 241 },
            { id: 'Multimédia', name: 'Multimédia', label: 'Multimédia', count: 117 },
            { id: 'Jeunesse', name: 'Jeunesse', label: 'Jeunesse', count: 36 },
            { id: 'Adulte', name: 'Adulte', label: 'Adulte', count: 36 }
          ]
        }, 
        {
          title: 'AUTEUR/ARTISTE...',
          items: [
            { id: 'Gilbert-Emmanuel', name: 'Gilbert-Emmanuel', label: 'Gilbert Emmanuel', count: 241 },
            { id: 'Boutavant-Marc', name: 'Boutavant-Marc', label: 'Boutavant Marc', count: 117 },
            { id: 'Indochine', name: 'Indochine', label: 'Indochine', count: 36 },
            { id: 'Beethoven-Ludwig-Van', name: 'Beethoven-Ludwig-Van', label: 'Beethoven Ludwig Van', count: 36 }
          ]
        }, 
        {
            title: "LANGUE", 
            items: [
                {id: 'Français',name: 'Français',label: 'Français',count : 241} ,
                {id: 'Anglais',name: 'Anglais',label: 'Anglais',count : 117},
                {id: 'Allemand',name: 'Allemand',label: 'Allemand',count : 36},
                {id: 'Italien',name: 'Italien',label: 'Italien',count : 36},
            ]
        },
        {
            title: "SUJET", 
            items: [
                {id: '19e-siècle',name: '19e-siècle',label: '19e siècle',count : 241} ,
                {id: 'Musique-Populaire',name: 'Musique-Populaire',label: 'Musique Populaire',count : 117},
                {id: '20e-siècle',name: '20e-siècle',label: '20e siècle',count : 36},
                {id: '18e-siècle',name: '18e-siècle',label: '18e siècle',count : 36},
            ]
        },
        {
            title: "ACCESSIBILITE", 
            items: [
                {id: 'Sous-titrage Sourds-et-malentendants',name: 'Sous-titrage Sourds-et-malentendants',label: 'Sous-titrage Sourds et malentendants',} ,
                
            ]
        }
    ];

    return (
        <div className="container_filter">
          <h3 className="research_filter">Affiner votre recherche :</h3>
          <FilterGroup categories={categories} />
        </div>
      );
};

export default filter;
