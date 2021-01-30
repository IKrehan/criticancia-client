import './NavButton.css';

function NavButton(props) {
    return (
        <div className='box'>
            <a href={props.link} className='btn-nav'>
                <p>{props.title}</p>
            </a>
        </div>
    );
  }
  
  export default NavButton;
  