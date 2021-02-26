import { useContext, useState } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';


export function Profile(){
    
    
    const name = ["Clay", "Pedro", "Jozé", "Joãozinho","Mário","Júlio", "Romeu", "Mateus", "Tomás", "Giaen"];
    
    
    const profileImage = ["https://occ-0-2020-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFKI9zyvqoWSFxn1tLR65ZVhYV34lGdcJ1m5YwfpUrxdry9R5mFUMSxB7iyGDCDIIxaxo7W4uFuRs_q-BHWO9L3s4ug.png?r=8e3",
    "https://occ-0-2020-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFNAiPETduJb4pbLQU7n-16iJMLL13DOjXL-7C5QS0TEtCmM0cAnFS8bTGr2p0YR8Blw562Ix5ja7yCyQ4-XUrlNn7A.png?r=a9c",
    "https://occ-0-2020-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFPFqP2G16IF8JpDDGdRdZn5x2qMRCaIQQ6vKhzfdeuWt5hR1TnH61ugxINBJOtA3Jk9-PiSdPlcLjEVaagZ5CFArXA.png?r=ca7",
    "https://occ-0-2020-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFIkcgr9kXWrQOr2OV0Cdtj6s3LpC09rt6ZR2VrFaAgdIy6LdTVHan4gCQ8b8SiITIRM-6QeOMbclZ3ZjJj0jLjrLfw.png?r=f76",
    "https://occ-0-2020-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFEkffBn01eotqBRyvg6IGb4Wy8i46nhNhQdPsxEAhcJHLbZnwcWeYHVoZoCBLow11TlUd3flAfE1DBd_tfeaSRP-tQ.png?r=619",
    "https://occ-0-2020-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFAIVrihJt8ftFKQf8iy3ptw4BcskSz_3RHrKfzteBs2P5s95VZLSbSsjn9UhRMMzO1eSStuBOVu_3LxZ9rNiSH94wg.png?r=836",
    "https://occ-0-2020-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFE8UEhUa5IEclqus4LfdUXiUfdxlqSX39C73ezhuomcUyANcCR77_SkF_7WKRDLiG1NkdOUzxSxg-3PiD41qn5qDfA.png?r=8aa",
    "https://occ-0-2020-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFF5_oV7O1Ot2NChFPP0Ij3MGyrhdVXeYrAabgRKg4nzd8bWTl4MG7wVzCX2Op94bs_es4h5Ijb_XtUCQBxC0_yQstA.png?r=f75"];
        
    const randomImage= profileImage[Math.floor(Math.random() * profileImage.length)];

  
   const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://occ-0-2020-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFIkcgr9kXWrQOr2OV0Cdtj6s3LpC09rt6ZR2VrFaAgdIy6LdTVHan4gCQ8b8SiITIRM-6QeOMbclZ3ZjJj0jLjrLfw.png?r=f76" alt="Profile icon"/>
       
        <div className={styles.profileUser}>
           <h2>Player 1</h2>
          
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
                
            </p>
        </div>      
        </div>
    );
}