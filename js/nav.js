const nav = `<nav>
<div id="logo">
    <div id="img">
        <a href="index.html"><img src="img/sbkingdom.png" alt="logo"></a>
    </div>
    <div id="title">
        <a href="index.html">
            <h3>SB KINGDOM</h3>
        </a>
    </div>
</div>
<div id="navbar">
    <input type="checkbox" id="checkbox" name="checkbox">
    <label for="checkbox" id="checkbtn">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </label>
    <ul class="menu" id="menu">
        <li class="navli"><a href="index.html">Home</a></li>
        <li class="navli"><a href="Annousement.html">Annousement</a></li>
        <li class="navli"><a href="Updates.html">Updates</a></li>
        <li class="navli"><a href="Media.html">Media</a></li>
        <li class="navli"><a href="About_Us.html">About Us</a></li>

    </ul>
</div>

</nav>`;

const footer =  `<div class="footer">
<hr>
<footer>
    <section class="footsec" id="sec1">
        <h4 class="center">Useful Links</h4>
        <ul class="center">
            <li><a href="index.html">Home</a></li>
            <li><a href="Annousement.html">Annousements</a></li>
            <li><a href="update.html">Updates</a></li>
        </ul>
    </section>
    <section class="footsec" id="sec2">
        <H4 class="center">Community</H4>
        <ul class="center">
            <li><a href="comingsoon.html">Discord</a></li>
            <li><a href="comingsoon.html">facebook Group</a></li>
            <li><a href="comingsoon.html">Web Chat</a></li>
        </ul>
    </section>
    <section class="footsec" id="sec3">
        <h4 class="center">Business</h4>
        <ul class="center">
            <li><a href="https://sbstudio.netliffy.app">Portfolio</a></li>
            <li><a href="comingsoon.html">Hire as freelancer</a></li>
            <li><a href="https://bit.ly/shoaibhossain">Contact with me</a></li>
        </ul>
    </section>
</footer>
<p> SB_KINGDOM&copy; all rights reserved </p>
</div>`;

const htNav = document.getElementById("nav")
htNav.innerHTML = nav;

document.getElementById("footer").innerHTML = footer;