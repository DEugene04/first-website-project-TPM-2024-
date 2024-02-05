
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="{{ asset('css/homepage.css') }}">
  
  <!-- link to font awesome -->
  <script src="https://kit.fontawesome.com/c07884273f.js" crossorigin="anonymous"></script>

  <!-- link for Roboto Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,700&display=swap" rel="stylesheet">

  <!-- JQuery -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  
</head>
<body>
  <header>
    <div class="navbar" id="navbar">
      <div class="logo-hackathon">
        <a href="#landing-page"><img src="/image/logo.png" alt=""></a>
      </div>
      <div class="navLinks" id="navLinks">
        <a href="#landing-page">Home <span></span></a>
        <a href="#championPage">Champion Prizes <span></span></a>
        <a href="#mentor-container">Mentor & Jury <span></span></a>
        <a href="#timeline-container">Timeline <span></span></a>
        <a href="login">Login <span></span></a>
<audio id="beep" preload="auto" src="/hover sfx.mp3"></audio>
      </div>
    </div>
  </header>
  <div class="container">
    <div class="landing-page" id="landing-page">
      <div class="landing-page-text">
        <img src="/image/TechnoScape.png" alt="">
        <h1>Hackathon</h1>
        <h3>Tema Event</h3>
          <div class="register-here">
            <button><a href="Register">Register Here!</a></button>
            <a href="">Video Recap</a>
          </div>
      </div>
      <div class="landing-page-picture">
        <img src="/image/landing page picture.png" alt="">
        <div class="about-faq">
          <a href="#aboutUs">ABOUT</a>
          <a href="#FAQ-container">FAQ</a>
        </div> 
      </div>
        <div class="red-circle">
        <img src="/red circle design.png" alt="">
      </div>
    </div>

    <br>

    <div class="champion-page" id="championPage">
      <div class="champion-container">      <h1>Champion</h1>
      <div class="blue-box-decor-container">
          <div class="blue-box-decor"></div>
          <div class="blue-box-decor2"></div>
        </div>
      </div>

      <h1 class="prize-text">Prizes</h1>

      <div class="trophyPage">
        <div class="trophy-container">
          <div class="trophy-3rd">
            <h2>3rd</h2>
            <img src="/image/trophy.png" alt="">
            <div class="trophy-2nd-details">
              <div class="prize-text-overlay">
                <p>Rp 1.000.000</p>
              </div>
              <div class="prize-text-overlay">
                <p>Merchandise</p>
              </div>
              <div class="prize-text-overlay">
                <p>Certificate</p>
              </div>
              <div class="trophy-background">
                <img src="/image/trophy outline.png" alt="">
              </div>
            </div>
<div class="red-box-decor-container">
              <div class="red-box-decor"></div>
              <div class="red-box-decor2"></div>
            </div>
          </div>

          <div class="trophy-2nd">
            <h2>2nd</h2>
            <img src="/image/trophy.png" alt="">
            <div class="trophy-2nd-details">
              <div class="prize-text-overlay">
                <p>Rp 3.000.000</p>
              </div>
              <div class="prize-text-overlay">
                <p>Merchandise</p>
              </div>
              <div class="prize-text-overlay">
                <p>Certificate</p>
              </div>
              <div class="trophy-background">
                <img src="/image/trophy outline.png" alt="">
              </div>
            </div>
          </div>
          
          <div class="trophy-1st">
            <h2>1st</h2>
            <img src="/image/trophy.png" alt="">
            <div class="trophy-2nd-details">
              <div class="prize-text-overlay">
                <p>Rp 5.000.000</p>
              </div>
              <div class="prize-text-overlay">
                <p>Merchandise</p>
              </div>
              <div class="prize-text-overlay">
                <p>Certificate</p>
              </div>
              <div class="trophy-background">
                <img src="/image/trophy outline.png" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    <div class="mentor-container" id="mentor-container">
      <div class="mentor-text-container">
        <div class="animated-text-mentors">
          <div class="letters-mentors" id="letter1">O</div>
          <div class="letters-mentors" id="letter2">U</div>
          <div class="letters-mentors" id="letter3">R</div>
          <div class="letters-mentors" id="letter4">.</div>
          <div class="letters-mentors" id="letter5">M</div>
          <div class="letters-mentors" id="letter6">E</div>
          <div class="letters-mentors" id="letter7">N</div>
          <div class="letters-mentors" id="letter8">T</div>
          <div class="letters-mentors" id="letter9">O</div>
          <div class="letters-mentors" id="letter10">R</div>
          <div class="letters-mentors" id="letter11">S</div>
          <div class="letters-mentors" id="letter4">.</div>
          <div><img class="letters-mentors" id="letter12" src="/image/mentors/Gear.png" alt=""></div>
        </div>
      </div>
      <div class="mentor-gallery">
        <div class="mentorCards-row-1">
          <img id="mentor1" class="mentors" onclick="showFace(1)" src="/image/mentors/technobox.png" alt="Technology Mentor">
          <img id="mentor2" class="mentors" onclick="showFace(2)" src="/image/mentors/businessbox.png" alt="Business Mentor">
          <img id="mentor3" class="mentors" onclick="showFace(3)" src="/image/mentors/designbox.png" alt="Design Mentor">
        </div>
        <div class="mentorCards-row-2">
          <img id="mentor4" class="mentors" onclick="showFace(4)" src="/image/mentors/businessbox.png" alt="Business Mentor">
          <img id="mentor5" class="mentors" onclick="showFace(5)" src="/image/mentors/technobox.png" alt="Technology Mentor">
          <img id="mentor6" class="mentors" onclick="showFace(6)" src="/image/mentors/businessbox.png" alt="Business Mentor">
        </div>
        <div class="mentorCards-row-3">
          <img id="mentor7" class="mentors" onclick="showFace(7)" src="/image/mentors/designbox.png" alt="Design Mentor">
          <img id="mentor8" class="mentors" onclick="showFace(8)" src="/image/mentors/businessbox.png" alt="Business Mentor">
          <img id="mentor9" class="mentors" onclick="showFace(9)" src="/image/mentors/technobox.png" alt="Technology Mentor">
        </div>
      </div>
    </div>
    
    <div class="juri-container">
      
<div class="star" id="star1"><img src="/star.png" alt=""></div>
      <div class="star" id="star2"><img src="/star.png" alt=""></div>
      <div class="star" id="star3"><img src="/star.png" alt=""></div>
      <div class="juri-photos">
      <div class="juri1-container">
        <img id="juri1" class="juries" src="/image/juri/Juri1.png" alt="">
        <div class="ellipse1-container">
          <div class="ellipse1"></div>
          <div class="juri1-name">Ellie Clark</div>
        </div>
      </div>
      
      <div class="juri2-container">
        <img id="juri1" class="juries" src="/image/juri/Juri2.png" alt="">
        <div class="ellipse1-container">
          <div class="ellipse1"></div>
          <div class="juri2-name">Logan Barnes</div>
        </div>
      </div>
        
      <div class="juri3-container"> 
        <img id="Juri1" class="juries" src="/image/juri/Juri3.png" alt="">
        <div class="ellipse1-container">
          <div class="ellipse1"></div>
          <div class="juri3-name">Zak Robinson</div>
        </div>
      </div>
    </div>
      <div class="juries-text">
        <h1>OUR JURIES</h1>
      </div>

      
  </div>

  <div class="about-container" id="aboutUs">
    <div class="about-title">
      ABOUT HACKATHON
    </div>
    <div class="about-mainText-container">
      <div class="about-mainText">
        Hackathon 6.0 merupakan puncak dari TechnoScape berupa kompetisi coding secara offline selama 48 jam, di mana setiap tim bersaing untuk membuat aplikasi atau situs web inovatif yang dapat memecahkan permasalahan di kehidupan nyata. Peserta berkesempatan untuk berinteraksi dengan para mentor dalam sesi mentoring bisnis, teknologi, dan desain.
      </div>
    </div>
    
    <div class="about-button-container">
      <button class="about-button"><a href="https://drive.google.com/file/d/1FQef4_keY9dA3pWDiZAiuICxqEr8-iVJ/view">Guidebook</a></button>
    </div>
<div class="about-us-decor" id="about-us-decor1">
      <img src="/about us decor.png" alt="">
    </div>
    <div class="about-us-decor" id="about-us-decor2">
      <img src="/about us decor2.png" alt="">
    </div>
    <div class="about-us-decor" id="about-us-decor3">
      <img src="/about us decor3.png" alt="">
    </div>
    <div class="about-us-decor" id="about-us-decor4">
      <img src="/about us decor4.png" alt="">
    </div>
  </div>
    
    <div class="benefitContainer">
      <div class="benefitBG">
        <img id="image-bg" src="/image/Benefits/Benefit BG.png" alt="">
      </div>
      <div class="benefit-content">
        <div class="benefit-title">
          <h1>BENEFIT</h1>
        </div>
  
        <div class="benefit-texts">
          <div class="benefit-texts-1">
            <div class="text-with-star">
              <img id="star" src="/image/Benefits/Star.png" alt="">
              <h3>Meningkatkan Jaringan</h3></div>

            <div class="text-with-star">
              <img id="star" src="/image/Benefits/Star.png" alt="">
              <h3>Mentoring dengan para ahli</h3>
            </div>
            
            <div class="text-with-star">
              <img id="star" src="/image/Benefits/Star.png" alt="">
              <h3>Peluang wawancara kerja</h3></div>
          </div>
    
          <div class="benefit-texts-2">
            <div class="text-with-star">
              <img id="star" src="/image/Benefits/Star.png" alt="">
              <h3 class="keterampilan">Mengembangkan keterampilan</h3>
            </div>
              
            <div class="text-with-star">
              <img id="star" src="/image/Benefits/Star.png" alt="">
              <h3>Tambahkan nilai ke CV</h3></div>
          </div>
        </div>

        <img id="star" src="/image/Benefits/Star.png" alt="">
      </div>
    </div>

    <div class="FAQ-container" id="FAQ-container">
      <h2>Frequently Asked Questions (FAQs)</h2>
      
      <div class="question-1" id="question-container">
        <div class="FAQ-question" id="FAQ1" >
          Apakah Hackathon gratis?
          <img id="dropdown-1" src="/image/Benefits/dropdown.png" alt=""></div>
          <div id="detailsA" class="details">
            <p>Biaya Pendaftaran:</p>
            <p> <span>&#8226;</span>
              Binusian Rp 175.000</p>
            <p> <span>&#8226;</span>
              Non-Binusian Rp 200.000</p>
          </div>
          <hr class="FAQ-line" id="FAQ-line-1"> 
      </div>
       
      <div class="question-2" id="question-container">
        <div class="FAQ-question" id="FAQ2" onclick="FAQ()" >
          Bisakah saya bergabung dengan lebih dari satu tim?
          <img id="dropdown-2" src="/image/Benefits/dropdown.png" alt="">
        </div> 
        <div id="detailsB" class="details">Peserta hanya diperbolehkan bergabung dalam satu tim. 
        Jika lebih dari satu tim, peserta tidak akan terdaftar sebagai peserta Hackathon.</div>
        <hr class="FAQ-line" id="FAQ-line-2">
      </div>

      <div class="question-3" id="question-container">
        <div class="FAQ-question" id="FAQ3" onclick="FAQ()" >
          Apa saja persyaratan untuk berpartisipasi di Hackathon?
          <img id="dropdown-3" src="/image/Benefits/dropdown.png" alt="">
        </div> 
        <div id="detailsC" class="details">
          <p>
            Peserta hanya dapat bergabung dalam 1 tim, baik secara individu maupun tim (setiap tim dapat beranggotakan maksimal 4 orang).Peserta adalah warga negara Indonesia berusia 18 hingga 25 tahun untuk memenuhi syarat.Peserta harus menyerahkan dokumen yang dibutuhkan pada halaman Hackathon, seperti:
          </p>
          <p> <span>&#8226;</span>CV (Curriculum Vitae)</p>
          <p> <span>&#8226;</span>Portfolio (Recomended, *tidak wajib*)</p>
          <p> <span>&#8226;</span>Non Binusian: KTP (KTP/SIM/dll)</p>
          <p> <span>&#8226;</span>Binusian : Kartu Binusian (Kartu Flazz)</p>
        </div>
        <hr class="FAQ-line" id="FAQ-line-3">
      </div>
      
      <div class="question-4" id="question-container">
        <div class="FAQ-question" id="FAQ4" onclick="FAQ()" >
          Apa saja persyaratan untuk berpartisipasi di Hackathon?
          <img id="dropdown-4" src="/image/Benefits/dropdown.png" alt="">
        </div> 
        <div id="detailsD" class="details">
          <p>
            Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi contact person kami:
          </p>
          <p> <span>&#8226;</span>HansonWA : 081398533025ID LINE : ivanderhanson0105</p>
          <p> <span>&#8226;</span>AudreyWA : 085173171809ID LINE : dreyelvia</p>
        </div>
        <hr class="FAQ-line" id="FAQ-line-4">
      </div>
    </div>

    <div class="timeline-container" id="timeline-container">
      <div class="timeline-text">
        <h2 class="timeline-text1">TIMELINE</h2>
        <h2 class="timeline-text2">TIMELINE</h2>
        <h2 class="timeline-date">July 2024</h2>
      </div>
      <div class="circles">
        <img id="circle" src="/image/Timeline/circles.png" alt="">
      </div>
      
      <div class="dot-container-1" id="dot1-container">
        <div id="dot-1-action">Open Registration</div>
        <div class="dot-1" id="dot-1">8</div>
      </div>
      
      <div class="dot-container-2" id="dot2-container">
        <div id="dot-2-action">Close Registration</div>
        <div class="dot-2" id="dot-2">23</div>
      </div>

      <div class="dot-container-3" id="dot3-container">
        <div id="dot-3-action">Technical Meeting</div>
        <div class="dot-3" id="dot-3">26</div>
      </div>

      <div class="dot-container-4" id="dot4-container">
        <div id="dot-4-action">Hackathon D-1</div>
        <div class="dot-4" id="dot-4">28</div>
      </div>

      <div class="dot-container-5" id="dot5-container">
        <div id="dot-5-action">Hackathon D-2</div>
        <div class="dot-5" id="dot-5">29</div>
      </div>

      <div class="dot-container-6" id="dot6-container">
        <div id="dot-6-action">Hackathon D-3</div>
        <div class="dot-6" id="dot-6">30</div>
      </div>
    </div>

    <div class="sponsor-container">
      <div class="sponsor-title"><h1>SPONSOR</h1></div>
      
      <div class="sponsors">
        <div class=" plat-sponsors" >
          <h2>Platinum Sponsors</h2>
          <img src="/image/Sponsors/Plat 1.png" alt="Neobank">
        </div>
        
        <div class=" gold-sponsors" >
          <h2>Gold Sponsors</h2>
          <img class="myRepublic" src="/image/Sponsors/Gold 1.png" alt="My Republic">
          <img class="hacktiv8" src="/image/Sponsors/Gold 2.png" alt="Hacktiv8">
        </div>
  
        <div class=" silver-sponsors" >
          <h2>Silver Sponsors</h2>
          <img class="progate" src="/image/Sponsors/Silver 1.png" alt="Progate">
          <img class="cakeResume" src="/image/Sponsors/Silver 2.png" alt="CakeResume">
          <img class="msi" src="/image/Sponsors/Silver 3.png" alt="MSI">
          <img class="exabytes" src="/image/Sponsors/Silver 4.png" alt="Exabytes">
          <img class="glair" src="/image/Sponsors/Silver 5.png" alt="Glair.ai">
          
        </div>
      </div>
<div class="timeline-Decor">
        <img src="/timeline Decor.png" alt="">
      </div>
    </div>

      <div class="mediaPartner-container">
        <div class="medPar-title">
          <h1>MEDIA PARTNER</h1>
        </div>
        <div class="photos">
          <div class="medPar-photo-container">
            <img src="/image/MedPar/Logo (1).png" alt="MedPar 1">
            <img src="/image/MedPar/Logo (2).png" alt="MedPar 2">
            <img src="/image/MedPar/Logo (3).png" alt="MedPar 3">
            <img src="/image/MedPar/Logo (4).png" alt="MedPar 4">
          </div>
          <div class="medPar-photo-container">
            <img src="/image/MedPar/Logo (1).png" alt="MedPar 1">
            <img src="/image/MedPar/Logo (2).png" alt="MedPar 2">
            <img src="/image/MedPar/Logo (3).png" alt="MedPar 3">
            <img src="/image/MedPar/Logo (4).png" alt="MedPar 4">
          </div>
        </div>
      </div>

      <div class="other-events-container">
        <div class="otherEvents-title">
          <h1>Other Events</h1>
        </div>
        <div class="slider-container">
          <div class="slider">
            <div class="image-slider-container">
              <div class="image-slider">
                <img src="/image/other events image/oe1 (1).png" alt="">
                <img src="/image/other events image/oe1 (2).png" alt="">
                <img src="/image/other events image/oe1 (3).png" alt="">
                <img src="/image/other events image/oe1 (4).png" alt="">
              </div>
              <div class="image-slider">
                <img src="/image/other events image/oe1 (1).png" alt="">
                <img src="/image/other events image/oe1 (2).png" alt="">
                <img src="/image/other events image/oe1 (3).png" alt="">
                <img src="/image/other events image/oe1 (4).png" alt="">
              </div>
            </div>
            
            
            <div class="slider-footer">
              <div id="slider-text" class="slider-text">
                <p class="developer-workshop">Virtual Conference</p>
                <p class="technoscape">Technoscape 2022</p>
              </div>
              <div class="slider-button">
                <button class="register-button"><a href="https://technoscape.id/techno-conference">Register Here</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="other-events-container">
        <div class="otherEvents-title">
          <h1>Other Events</h1>
        </div>
        <div class="slider-container">
          <div class="slider">
            <div class="image-slider-container">
              <div class="image-slider">
                <img src="/image/other events image/oe2 (1).png" alt="">
                <img src="/image/other events image/oe2 (2).png" alt="">
                <img src="/image/other events image/oe2 (3).png" alt="">
                <img src="/image/other events image/oe2 (4).png" alt="">
              </div>
              <div class="image-slider">
                <img src="/image/other events image/oe2 (1).png" alt="">
                <img src="/image/other events image/oe2 (2).png" alt="">
                <img src="/image/other events image/oe2 (3).png" alt="">
                <img src="/image/other events image/oe2 (4).png" alt="">
              </div>
            </div>
            
            
            <div class="slider-footer">
              <div id="slider-text" class="slider-text">
                <p class="developer-workshop">Developer Workshop</p>
                <p class="technoscape">Technoscape 2022</p>
              </div>
              <div class="slider-button">
                <button class="register-button"><a href="https://technoscape.id/techno-conference">Register Here</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="form-container">
        <div class="submitForm-text">
          <div class="submitForm-title">
            Contact Us
          </div>
          <div class="submitForm-title2">
            We are here to help you
          </div>
        </div>
        
        <div class="submit-form-container">
          <form id="submit-form" action="">
            <h2>Let's Talk</h2>
            <!-- Name -->
            <div>
              <input type="text" id="name" placeholder="Name" >
              <p id="error-name" class="error-message"></p>
            </div>
            
            <!-- Email -->
            <div>
              <input type="text" id="email" placeholder="Email" >
              <p id="error-email" class="error-message"></p>
            </div>

            <!-- Subject -->
            <div>
              <input type="text" id="subject" placeholder="Subject" >
              <p id="error-subject" class="error-message"></p>
            </div>

            <!-- Message -->
            <div>
              <input type="text" id="message" placeholder="Message" >
              <p id="error-message-box" class="error-message"></p>
            </div>

            <div class="submit-btn-container">
              <button id="submit-btn" type="submit">Submit</button>
            </div>
              
            
            
          </form>
        </div>
        <img class="Mascot" src="/image/Mascot.png" alt="">
      </div>
      
      <div class="footer-container">
        <hr class="footer-line">
        
        <div class="footer">
          <div class="left-footer">
            <p>Powered and organized by</p>
            <img src="/image/logo bncc.png" alt="BNCC Logo">
          </div>
          <div class="right-footer">
            <div class="footer-logos">
              <img onclick="mailTo()" src="/image/email.png" alt="Email">
              <a href="https://www.instagram.com/technoscapebncc/"><img src="/image/Instagram.png" alt="Instagram"></a>
              <a href="https://www.facebook.com/bina.nusantara.computer.club/"><img src="/image/facebook.png" alt="Facebook"></a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FBNCC_Binus"><img src="/image/Twitter.png" alt="Twitter"></a>
              <a href="https://www.linkedin.com/company/bina-nusantara-computer-club/"><img src="/image/linkedin.png" alt="LinkedIn"></a>
            </div>
            <a href="https://technoscape.id/privacy-policy">Privacy Policy & Terms of Service</a>
          </div>
        </div>
        
        <hr class="footer-line">

      </div>
  


<script src="{{ asset('js/homepage.js') }}"></script>
</body>
</html>
