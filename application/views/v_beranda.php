    <!--Dynamic Nav Bar-->
     
    <!--Parallax effect-->
    <div class="parallax-container" id="home">
        <div class="parallax">
            <section class="center">
                <div id="particles-js"></div>
            </section>
        </div>
    </div>
<center>
    <!-- Home Section -->
    <div class="text col-sm-6 pt-5 mt-5 mb-5">Hai, Saya <span class="header">Ma'shum Abdul Jabbar</span>
        <div class="center">
            <div>
                <img src="assets/images/me.jpg" alt="" class="rounded-circle" height="210" width="200">
            </div>
            <span style="display: inline;" >Saya seorang <span class="animated-text"
                data-words="IT Enthusiast, Programmer, Database Engineer, System Analyst"></span>
            </span>
            <div>
                <div class="social-icons">
                    <a title="Github" class="socialicon github" href="https://github.com/multimediary/" target="_blank" rel="author">
                        <i class="fab fa-github"></i>
                    </a>
					
					<a title="LinkedIn" class="socialicon linkedin" href="https://www.linkedin.com/in/multimediary/" target="_blank" rel="author">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
					
					<a title="Instagram" class="socialicon instagram" href="https://www.instagram.com/multimediary/" target="_blank" rel="author">
                        <i class="fab fa-instagram"></i>
                    </a>
					
					<a title="Facebook" class="socialicon facebook" href="https://www.facebook.com/multimediary2" target="_blank" rel="author">
                        <i class="fab fa-facebook"></i>
                    </a>
					
					<a title="Twitter" class="socialicon twitter" href="https://twitter.com/multimediary2" target="_blank" rel="author">
                        <i class="fab fa-twitter"></i>
                    </a>
					
					<a title="Youtube" class="socialicon youtube" href="https://www.youtube.com/channel/UCCbFaN2PH_drk0K61sjpOcw/playlists?view=1&flow=grid" target="_blank" rel="author">
                        <i class="fab fa-youtube"></i>
                    </a>

                    <a title="Blog" class="socialicon google" href="https://katasandi.biz.id/plugin/article" target="_blank" rel="author">
                        <i class="fab fa-google"></i>
                    </a>

                    <a title="Medium" class="socialicon medium" href="https://multimediary.medium.com/" target="_blank" rel="author">
                        <i class="fab fa-medium-m"></i>
                    </a>

                </div>
            </div>
        </div>
    </div>
</center>
<p style="text-align:center; color:green;"><?php if($this->session->flashdata('message')){ echo $this->session->flashdata('message'); }?></p>
<script src='https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js'></script>
 <script src="<?php echo base_url();?>assets/js/particle.js"></script>