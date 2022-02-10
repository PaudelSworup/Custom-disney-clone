import React,{useState} from 'react';
import nava from './Headernav';
import "./header.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userName,userPhoto,setUserLogin,setSignOut } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userNam = useSelector(userName);
    const userImage = useSelector(userPhoto);

  


    useEffect(()=>{
    
    const auth = getAuth();
    auth.onAuthStateChanged(async (user)=>{
        if(user){
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL    
            }));
        
            history.push('/')
           
        }else{
            history.push('/login')
        }
    })
    },[])

    console.log(userImage); 


    const SignIn = () =>{
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider).then((result)=>{
            // console.log(result);
            let user = result.user;
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL    
            })
            );
            history.push('/')
        })      
    }

    const SignOut = () =>{
        const auth = getAuth();
        auth.signOut().then(()=>{
            dispatch(setSignOut());
        })
        history.push('/login')
    }


    const[toggle , setToggle] = useState(false);

    const Bars = () =>{
        setToggle(true);
        console.log('clicked');
        const bars_icon = document.getElementById('bars');
        const cross_icon = document.getElementById('cross');

        
       
        if(bars_icon.style.display = 'flex'){
            bars_icon.style.display = 'none';
            cross_icon.style.display = 'flex';
        }else{
            bars_icon.style.display = 'flex';
        }
    }

    const Times = () =>{
        setToggle(false);
        const bars_icon = document.getElementById('bars');
        const cross_icon = document.getElementById('cross');
        

        if(cross_icon.style.display = 'flex'){
            cross_icon.style.display = 'none';
            bars_icon.style.display = 'flex';
        }else{
            cross_icon.style.display = 'flex';
        }
    }
  return (
      <>
<nav className='container'>
    {userNam ? <Link to="/">
    <img src="/images/logo.svg" className='logoimg' alt='' />
    </Link> : <img src="/images/logo.svg" className='logoimg' alt='' />}
    
    
    {
        !userNam ?
        <div className='logcontainer'>
            <div className='login' onClick={SignIn}>Login</div>
        </div>
         : 

        <>
         <div className={toggle ? 'NavMenu active' : 'NavMenu'}>
            {nava.map((curElem)=>{
                const{id,src,span} = curElem;
                return(
                    <a key={id}>
                    <img src={src} alt=""/>
                    <span>{span}</span>
                </a>
                )
            })}
            <div className='help' onClick={SignOut}>
            <img src={userImage} className='UserImg' />
            </div>

        </div>
        
        <div className="menu-btn">
               <i onClick={ ()=>Bars()} id="bars" className='bars-icon' ><FontAwesomeIcon   icon={faBars }  /></i>
                <i onClick={()=>Times()} id="cross" className='cross-icon'><FontAwesomeIcon    icon={faTimes } /></i>
                </div>
        </>

    }
       

</nav>

      </>
  )
};

export default Header;
