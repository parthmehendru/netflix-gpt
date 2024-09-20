import React, { useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { toggleGptSearchView, toggleLoading } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice'



const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const selectedLanguage = useSelector((store) => store.config.lang); 
    const handleSignOut = () => {
        signOut(auth)
        .then(()=> {

        })
        .catch((error)=> {
            navigate("/error");
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
              navigate("/browse");
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
          });
          
        //   unsubscribe when component unmounts
          return ()=> unsubscribe();
          
    }, [dispatch, navigate])

    const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView());

      if(showGptSearch){
        dispatch(toggleLoading(0));
      }
    }
    const handleLanguage = (e)=> {
      localStorage.setItem('preferredLanguage', e.target.value);
      dispatch(changeLanguage(e.target.value));
  }

    useEffect(() => {
        const storedLang = localStorage.getItem('preferredLanguage');
        if (storedLang) {
          // Update Redux state if the stored language exists in localStorage
          dispatch(changeLanguage(storedLang));
        }
      }, [dispatch]);
  return (
    <div className='absolute top-0 px-8 py-2 bg-gradient-to-b from-black z-30 w-full flex flex-col md:flex-row justify-between'>
        <img className='w-44 mx-auto md:mx-0' src="/Netflix_Logo_PMS.png" alt="Logo" />
        {user.uid && <div className='flex justify-center md:justify-normal items-center gap-4'>
            {showGptSearch && <select onChange={handleLanguage} value={selectedLanguage} className='rounded-md p-2 bg-gray-900 text-white border border-slate-500'>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
            </select>}
            <button onClick={handleGptSearchClick} className='py-2 px-4 bg-purple-600 text-white rounded-md'>{showGptSearch ? "Home" : "GPT Search"}</button>
            <div className='md:block hidden w-12 h-12 cursor-pointer bg-emerald-600 text-white text-center font-bold text-4xl rounded-md'>{user.displayName ? user.displayName[0] : "$"}</div>
            <button onClick={handleSignOut} className='font-bold text-white bg-red-600 px-3 py-2 rounded-md'>Sign Out</button>
        </div>}
    </div>
  );
};

export default Header;

// <i class="fa-solid fa-volume"></i>
