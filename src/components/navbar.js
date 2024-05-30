


function Navbar() {
    return (
        <>
        <header role='banner'> 
        <div className='header'>
          <a href='/'> 
            <img src="" className='logo' alt='logo de la bibliothèque - Accueil' />
          </a>
          <form role='search'>
            <select title='Listes des fonctionnailités et disponibilités du site internet'>
              <option value=''>Catalogue</option>
              <option value=''>Livres numériques</option>
              <option value=''>Pitem</option>
              <option value=''>Agenda</option>
              <option value=''>Page du site</option>
              <option value=''>Archives</option>
            </select>
            <input type='search' title='Recherchez par mots-clés'/>
            <input type='submit' value="Rechercher"/>
          </form>
         </div>
      </header>
      <nav role='navigation' aria-label="Menu principal">
        <ul>
          <li><a href='/'>Pratique</a></li>
          <li><a href='/'>Bibliothèques</a></li>
          <li><a href='/'>Agenda</a></li>
          <li><a href='/'>Nouveauté</a></li>
          <li><a href='/'>En ligne</a></li>
          <li><a href='/'>Découvrir</a></li>
          <li><a href='/'>Patrimoine</a></li>
          <li><a href='/'>Accessibilité</a></li>
        </ul>
      </nav>
        </>
    );
}

export default Navbar;