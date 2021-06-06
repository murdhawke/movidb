<template>
    <div class="footer">
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                  <div class="col-sm-6 col-md-3 item">
                        <img src="../assets/img/movidb-btm.png" alt="" class="logo-btm">
                        <h2 class="copyright">MoviDb © 2021</h2>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-sm-6 item text">
                        <h3>License</h3>
                        <p>All rights granted under this License are granted for the term of copyright on the Program,
                            and are irrevocable provided the stated conditions are met. This License explicitly affirms 
                            your unlimited permission to run the unmodified Program. This License acknowledges your rights of 
                            fair use or other equivalent, as provided by copyright law.
                        </p>
                    </div>
                    <div class="col item social"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-snapchat"></i></a><a href="#"><i class="fab fa-instagram"></i></a></div>
                </div>
            </div>
        </footer>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

footer {
    width:100%;
    height: auto;
    margin: auto;
    margin-top:10px;
    position:relative;
    z-index: 1;
    margin-bottom: 10px;
    text-align: left;
}
.footer-dark  {
  display: flex;
  padding:20px;
  color:#f0f9ff;
  background-color: #26272b;
  padding-top: 20px;
  
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
  
}

.footer-dark ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
  
}

.footer-dark ul a:hover {
  opacity:0.8;
}
@media (max-width:400px) {
  .footer-dark .item.text {
    display: flex;
    padding: auto;
    margin-left: 25px;
    margin-right: 25px;
    flex-wrap: wrap;
    width: auto;
    
  }
}
@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:20px;
    
  }
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
  padding-top: 2rem;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    padding-top:20px;
  }
}

.footer-dark .item.social > a {
  font-size:20px;
  width:36px;
  height:36px;
  line-height:36px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  box-shadow:0 0 0 1px rgba(255,255,255,0.4);
  margin:0 8px;
  color:#fff;
  opacity:0.75;
}

.footer-dark .item.social > a:hover {
  opacity:0.9;
}

.footer-dark .copyright {
  padding-top: 10px;
  opacity:0.7;
  font-size:16px;
  margin-bottom:0;
}
.logo-btm {
  width: 100px;
  height: 100px;
  padding: 0;
  color: #C44900;
}
</style>