export default function TabButten({children , onSelect , isSelected }) {
  
  // console.log('TabButten click');
    return(
      <li>
         <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button> 
      </li>
    );  
}