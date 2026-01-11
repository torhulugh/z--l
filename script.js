window.onload = pageReady;
function pageReady() {
  //******************************************************************************
  // this code block below finds which class index has been clicked then on then
  // tinserts then index in a letaible.
  // -------------------------------------------------------------------------
  // Array.from(element class).forEach((class name, index) => {
  //     class name.onclick = givenName;
  //     function givenName() {
  //       selectedIndex = index;
  //     }
  // ------------------------------------------------------------------------
  // ****************************************************************************
  // mobile menu script
  const mobileMenuButton = document.getElementById("mobile-menu-btn");
  const mobileMenuOptions = document.getElementById("mobileMenuOptions");
  const mobileOpenIcon = document.getElementById("mobile-menu-icon");
  const mobileCloseIcon = document.getElementById("mobile-menu-close-btn");
  //   open mobile menu
  mobileOpenIcon.onclick = function () {
    mobileMenuOptions.style.display = "flex";
    mobileOpenIcon.style.display = "none";
    mobileCloseIcon.style.display = "flex";
    console.log("open menu");
  };
  //   close mobile menu
  mobileCloseIcon.onclick = function () {
    mobileMenuOptions.style.display = "none";
    mobileOpenIcon.style.display = "flex";
    mobileCloseIcon.style.display = "none";
    console.log("close menu");
  };
  // popup
  let editorPopUp = document.getElementById("popUp");
  let closePopUp = document.getElementById("popUpX");
  closePopUp.onclick = ClosePopUpWhenClicked;
  //  close popoup when opened
  function ClosePopUpWhenClicked() {
    editorPopUp.style.display = "none";
  }

  //  Library cards color options  colored circles
  let redWhenClicked = document.getElementsByClassName("onred");
  let greenWhenClicked = document.getElementsByClassName("ongreen");
  let brownWhenClicked = document.getElementsByClassName("onbrown");
  let yellowWhenClicked = document.getElementsByClassName("onyellow");
  let pinkWhenClicked = document.getElementsByClassName("onpink");
  let blueWhenClicked = document.getElementsByClassName("onblue");
  let blackWhenClicked = document.getElementsByClassName("onblack");
  let whiteWhenClicked = document.getElementsByClassName("onwhite");
  // Library cards color options selected color indicators
  let redIndicator = document.getElementsByClassName("stred");
  let greenIndicator = document.getElementsByClassName("stgreen");
  let brownIndicator = document.getElementsByClassName("stbrown");
  let yellowIndicator = document.getElementsByClassName("styellow");
  let pinkIndicator = document.getElementsByClassName("stpink");
  let blueIndicator = document.getElementsByClassName("stblue");
  let blackIndicator = document.getElementsByClassName("stblack");
  let whiteIndicator = document.getElementsByClassName("stwhite");
  // Library cards image assets
  let redImgAsset = document.getElementsByClassName("i1");
  let greenImgAsset = document.getElementsByClassName("i2");
  let brownImgAsset = document.getElementsByClassName("i3");
  let yellowImgAsset = document.getElementsByClassName("i4");
  let pinkImgAsset = document.getElementsByClassName("i5");
  let blueImgAsset = document.getElementsByClassName("i6");
  let blackImgAsset = document.getElementsByClassName("i7");
  let whiteImgAsset = document.getElementsByClassName("i8");
  // function for setting up image selected for download
  colorOfImgAsset = (color) => {
    color;
    return color;
  };
  // library cards action buttons
  let downloadButton = document.getElementsByClassName("a1");
  let editorButton = document.getElementsByClassName("a2");
  let youtubeButton = document.getElementsByClassName("a3");
  let shareButton = document.getElementsByClassName("a4");
  //  library cards image asset container
  let imageAssetContainer = document.getElementsByClassName("assetHolder");
  // empty letiable to hold class list clicked index
  let selectedIndex = null;

  const indexColorClicked = [1]; //holds index of color clicked
  const colorSelected = indexColorClicked[0]; //holds name of color clicked
  function ClosePopUpWhenClicked() {
    editorPopUp.style.display = "none";
  }
  // librar card (red ) circle when clicked
  // Convert HTMLCollection to Array so we can use .forEach() on classList
  Array.from(redWhenClicked).forEach((onred, index) => {
    onred.onclick = redCclicked;
    function redCclicked() {
      selectedIndex = index;
      indexColorClicked.pop();
      colorOptions.pop();
      // asset image display toggle script
      /*1*/ redImgAsset[selectedIndex].style.opacity = "100%";
      /*2*/ greenImgAsset[selectedIndex].style.opacity = "0";
      /*3*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*4*/ yellowImgAsset[selectedIndex].style.opacity = "0";
      /*5*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*6*/ pinkImgAsset[selectedIndex].style.opacity = "0";
      /*7*/ blueImgAsset[selectedIndex].style.opacity = "0";
      /*8*/ blackImgAsset[selectedIndex].style.opacity = "0";
      /*9*/ whiteImgAsset[selectedIndex].style.opacity = "0";
      //  library cards selected color indicator
      /*1*/ redIndicator[selectedIndex].style.opacity = "100%";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      // library cards colored circles click script
      // 1
      redWhenClicked[selectedIndex].style.width = "25px";
      redWhenClicked[selectedIndex].style.height = "10px";
      // 2
      greenWhenClicked[selectedIndex].style.width = "15px";
      greenWhenClicked[selectedIndex].style.height = "15px";
      // 3
      brownWhenClicked[selectedIndex].style.width = "15px";
      brownWhenClicked[selectedIndex].style.height = "15px";
      // 4
      yellowWhenClicked[selectedIndex].style.width = "15px";
      yellowWhenClicked[selectedIndex].style.height = "15px";
      // 5
      pinkWhenClicked[selectedIndex].style.width = "15px";
      pinkWhenClicked[selectedIndex].style.height = "15px";
      // 6
      blueWhenClicked[selectedIndex].style.width = "15px";
      blueWhenClicked[selectedIndex].style.height = "15px";
      // 7
      blackWhenClicked[selectedIndex].style.width = "15px";
      blackWhenClicked[selectedIndex].style.height = "15px";
      // 8
      whiteWhenClicked[selectedIndex].style.width = "15px";
      whiteWhenClicked[selectedIndex].style.height = "15px";

      // Library cards image assets
      /*1*/ redIndicator[selectedIndex].style.opacity = "100%";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      indexColorClicked.push(index);
      colorOptions.push(redWhenClicked);
    }
  });
  // librar card (green ) circle when clicked
  // // Convert HTMLCollection to Array so we can use .forEach()
  Array.from(greenWhenClicked).forEach((ongreen, index) => {
    ongreen.onclick = greenCclicked;
    function greenCclicked() {
      selectedIndex = index;
      indexColorClicked.pop();
      colorOptions.pop();
      //  Library cards image asset script
      /*1*/ redImgAsset[selectedIndex].style.opacity = "0";
      /*2*/ greenImgAsset[selectedIndex].style.opacity = "100%";
      /*3*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*4*/ yellowImgAsset[selectedIndex].style.opacity = "0";
      /*5*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*6*/ pinkImgAsset[selectedIndex].style.opacity = "0";
      /*7*/ blueImgAsset[selectedIndex].style.opacity = "0";
      /*8*/ blackImgAsset[selectedIndex].style.opacity = "0";
      /*9*/ whiteImgAsset[selectedIndex].style.opacity = "0";
      // library cards selected color indicator
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "100%";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      // library cards colored circles click script
      // 1
      redWhenClicked[selectedIndex].style.width = "15px";
      redWhenClicked[selectedIndex].style.height = "15px";
      //2
      greenWhenClicked[selectedIndex].style.width = "25px";
      greenWhenClicked[selectedIndex].style.height = "10px";
      //3
      brownWhenClicked[selectedIndex].style.width = "15px";
      brownWhenClicked[selectedIndex].style.height = "15px";
      //4
      yellowWhenClicked[selectedIndex].style.width = "15px";
      yellowWhenClicked[selectedIndex].style.height = "15px";
      //5
      pinkWhenClicked[selectedIndex].style.width = "15px";
      pinkWhenClicked[selectedIndex].style.height = "15px";
      //6
      blueWhenClicked[selectedIndex].style.width = "15px";
      blueWhenClicked[selectedIndex].style.height = "15px";
      //7
      blackWhenClicked[selectedIndex].style.width = "15px";
      blackWhenClicked[selectedIndex].style.height = "15px";
      //8
      whiteWhenClicked[selectedIndex].style.width = "15px";
      whiteWhenClicked[selectedIndex].style.height = "15px";
      // Library cards image assets
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "100%";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      indexColorClicked.push(index);
      colorOptions.push(greenWhenClicked);
    }
  });
  // librar card (brown ) circle when clicked
  Array.from(brownWhenClicked).forEach((onbrown, index) => {
    onbrown.onclick = brownCclicked;
    function brownCclicked() {
      selectedIndex = index;
      indexColorClicked.pop();
      colorOptions.pop();
      //  Library cards image asset script
      /*1*/ redImgAsset[selectedIndex].style.opacity = "0";
      /*2*/ greenImgAsset[selectedIndex].style.opacity = "0";
      /*3*/ brownImgAsset[selectedIndex].style.opacity = "100%";
      /*4*/ yellowImgAsset[selectedIndex].style.opacity = "0";
      /*5*/ pinkImgAsset[selectedIndex].style.opacity = "0";
      /*6*/ blueImgAsset[selectedIndex].style.opacity = "0";
      /*7*/ blackImgAsset[selectedIndex].style.opacity = "0";
      /*8*/ whiteImgAsset[selectedIndex].style.opacity = "0";
      // library cards selected color indicator
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "100%";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      // library cards colored circles click script
      //1
      redWhenClicked[selectedIndex].style.width = "15px";
      redWhenClicked[selectedIndex].style.height = "15px";
      //2
      greenWhenClicked[selectedIndex].style.width = "15px";
      greenWhenClicked[selectedIndex].style.height = "15px";
      //3
      brownWhenClicked[selectedIndex].style.width = "25px";
      brownWhenClicked[selectedIndex].style.height = "10px";
      //4
      yellowWhenClicked[selectedIndex].style.width = "15px";
      yellowWhenClicked[selectedIndex].style.height = "15px";
      //5
      pinkWhenClicked[selectedIndex].style.width = "15px";
      pinkWhenClicked[selectedIndex].style.height = "15px";
      //6
      blueWhenClicked[selectedIndex].style.width = "15px";
      blueWhenClicked[selectedIndex].style.height = "15px";
      //7
      blackWhenClicked[selectedIndex].style.width = "15px";
      blackWhenClicked[selectedIndex].style.height = "15px";
      //8
      whiteWhenClicked[selectedIndex].style.width = "15px";
      whiteWhenClicked[selectedIndex].style.height = "15px";
      // Library cards image assets
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "100%";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      indexColorClicked.push(index);
      colorOptions.push(brownWhenClicked);
    }
  });
  // function for to carrying out desired actions when the (yellow) circle is clicked
  Array.from(yellowWhenClicked).forEach((onyellow, index) => {
    onyellow.onclick = yellowCclicked;
    function yellowCclicked() {
      selectedIndex = index;

      indexColorClicked.pop();
      colorOptions.pop();
      //  Library cards image asset script
      /*1*/ redImgAsset[selectedIndex].style.opacity = "0";
      /*1*/ greenImgAsset[selectedIndex].style.opacity = "0";
      /*1*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*1*/ yellowImgAsset[selectedIndex].style.opacity = "100%";
      /*1*/ pinkImgAsset[selectedIndex].style.opacity = "0";
      /*1*/ blueImgAsset[selectedIndex].style.opacity = "0";
      /*1*/ blackImgAsset[selectedIndex].style.opacity = "0";
      /*1*/ whiteImgAsset[selectedIndex].style.opacity = "0";
      // library cards selected color indicator
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "100%";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      // library cards colored circles click script
      //1
      redWhenClicked[selectedIndex].style.width = "15px";
      redWhenClicked[selectedIndex].style.height = "15px";
      //2
      greenWhenClicked[selectedIndex].style.width = "15px";
      greenWhenClicked[selectedIndex].style.height = "15px";
      //3
      brownWhenClicked[selectedIndex].style.width = "15px";
      brownWhenClicked[selectedIndex].style.height = "15px";
      //4
      yellowWhenClicked[selectedIndex].style.width = "25px";
      yellowWhenClicked[selectedIndex].style.height = "10px";
      //5
      pinkWhenClicked[selectedIndex].style.width = "15px";
      pinkWhenClicked[selectedIndex].style.height = "15px";
      //6
      blueWhenClicked[selectedIndex].style.width = "15px";
      blueWhenClicked[selectedIndex].style.height = "15px";
      //7
      blackWhenClicked[selectedIndex].style.width = "15px";
      blackWhenClicked[selectedIndex].style.height = "15px";
      //8
      whiteWhenClicked[selectedIndex].style.width = "15px";
      whiteWhenClicked[selectedIndex].style.height = "15px";
      // Library cards image assets
      redIndicator[selectedIndex].style.opacity = "0";
      /*1*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*2*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*3*/ yellowIndicator[selectedIndex].style.opacity = "100%";
      /*4*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*5*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*7*/ whiteIndicator[selectedIndex].style.opacity = "0";
      indexColorClicked.push(index);
      colorOptions.push(yellowWhenClicked);
    }
  });
  // function for to carrying out desired actions when the (pink) circle is clicked
  Array.from(pinkWhenClicked).forEach((onpink, index) => {
    onpink.onclick = pinkCclicked;
    function pinkCclicked() {
      selectedIndex = index;
      indexColorClicked.pop();
      colorOptions.pop();
      //  Library cards image asset script
      /*1*/ redImgAsset[selectedIndex].style.opacity = "0";
      /*2*/ greenImgAsset[selectedIndex].style.opacity = "0";
      /*3*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*4*/ yellowImgAsset[selectedIndex].style.opacity = "0";
      /*5*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*6*/ pinkImgAsset[selectedIndex].style.opacity = "100%";
      /*7*/ blueImgAsset[selectedIndex].style.opacity = "0";
      /*8*/ blackImgAsset[selectedIndex].style.opacity = "0";
      /*9*/ whiteImgAsset[selectedIndex].style.opacity = "0";
      // library cards selected color indicator
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "100%";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      // library cards colored circls click script
      //1
      redWhenClicked[selectedIndex].style.width = "15px";
      redWhenClicked[selectedIndex].style.height = "15px";
      //2
      greenWhenClicked[selectedIndex].style.width = "15px";
      greenWhenClicked[selectedIndex].style.height = "15px";
      //3
      brownWhenClicked[selectedIndex].style.width = "15px";
      brownWhenClicked[selectedIndex].style.height = "15px";
      //4
      yellowWhenClicked[selectedIndex].style.width = "15px";
      yellowWhenClicked[selectedIndex].style.height = "15px";
      //5
      pinkWhenClicked[selectedIndex].style.width = "25px";
      pinkWhenClicked[selectedIndex].style.height = "10px";
      //6
      blueWhenClicked[selectedIndex].style.height = "15px";
      blueWhenClicked[selectedIndex].style.width = "15px";
      //7
      blackWhenClicked[selectedIndex].style.height = "15px";
      blackWhenClicked[selectedIndex].style.width = "15px";
      //8
      whiteWhenClicked[selectedIndex].style.height = "15px";
      whiteWhenClicked[selectedIndex].style.width = "15px";
      // Library cards image assets
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "100%";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      indexColorClicked.push(index);
      colorOptions.push(pinkWhenClicked);
    }
  });
  // function to carrying out desired actions when the (blue) circle is clicked
  Array.from(blueWhenClicked).forEach((onblue, index) => {
    onblue.onclick = blueCclicked;
    function blueCclicked() {
      selectedIndex = index;
      indexColorClicked.pop();
      colorOptions.pop();
      //  Library cards image asset script
      /*1*/ redImgAsset[selectedIndex].style.opacity = "0";
      /*2*/ greenImgAsset[selectedIndex].style.opacity = "0";
      /*3*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*4*/ yellowImgAsset[selectedIndex].style.opacity = "0";
      /*5*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*6*/ pinkImgAsset[selectedIndex].style.opacity = "0";
      /*7*/ blueImgAsset[selectedIndex].style.opacity = "100%";
      /*8*/ blackImgAsset[selectedIndex].style.opacity = "0";
      /*9*/ whiteImgAsset[selectedIndex].style.opacity = "0";
      // library cards selected color indicator
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "100%";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      // library cards colored circls click script
      // 1
      redWhenClicked[selectedIndex].style.width = "15px";
      redWhenClicked[selectedIndex].style.height = "15px";
      //2
      greenWhenClicked[selectedIndex].style.width = "15px";
      greenWhenClicked[selectedIndex].style.height = "15px";
      //3
      brownWhenClicked[selectedIndex].style.width = "15px";
      brownWhenClicked[selectedIndex].style.height = "15px";
      //4
      yellowWhenClicked[selectedIndex].style.width = "15px";
      yellowWhenClicked[selectedIndex].style.height = "15px";
      //5
      pinkWhenClicked[selectedIndex].style.width = "15px";
      pinkWhenClicked[selectedIndex].style.height = "15px";
      //6
      blueWhenClicked[selectedIndex].style.width = "25px";
      blueWhenClicked[selectedIndex].style.height = "10px";
      //7
      blackWhenClicked[selectedIndex].style.width = "15px";
      blackWhenClicked[selectedIndex].style.height = "15px";
      //8
      whiteWhenClicked[selectedIndex].style.width = "15px";
      whiteWhenClicked[selectedIndex].style.height = "15px";
      // Library cards image assets
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "o";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "100%";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      indexColorClicked.push(index);
      colorOptions.push(blueWhenClicked);
    }
  });
  // function to carrying out desired actions  when the (black) circle is clicked
  Array.from(blackWhenClicked).forEach((onblack, index) => {
    onblack.onclick = blackCclicked;
    function blackCclicked() {
      selectedIndex = index;
      indexColorClicked.pop();
      colorOptions.pop();
      //  Library cards image asset script
      /*1*/ redImgAsset[selectedIndex].style.opacity = "0";
      /*2*/ greenImgAsset[selectedIndex].style.opacity = "0";
      /*3*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*4*/ yellowImgAsset[selectedIndex].style.opacity = "0";
      /*5*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*6*/ pinkImgAsset[selectedIndex].style.opacity = "0";
      /*7*/ blueImgAsset[selectedIndex].style.opacity = "0";
      /*8*/ blackImgAsset[selectedIndex].style.opacity = "1005";
      /*9*/ whiteImgAsset[selectedIndex].style.opacity = "0";
      // library cards selected color indicator
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "100%";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      // library cards colored circls click script
      // 1
      redWhenClicked[selectedIndex].style.width = "15px";
      redWhenClicked[selectedIndex].style.height = "15px";
      //2
      greenWhenClicked[selectedIndex].style.width = "15px";
      greenWhenClicked[selectedIndex].style.height = "15px";
      //3
      brownWhenClicked[selectedIndex].style.width = "15px";
      brownWhenClicked[selectedIndex].style.height = "15px";
      //4
      yellowWhenClicked[selectedIndex].style.width = "15px";
      yellowWhenClicked[selectedIndex].style.height = "15px";
      //5
      pinkWhenClicked[selectedIndex].style.width = "15px";
      pinkWhenClicked[selectedIndex].style.height = "15px";
      //6
      blueWhenClicked[selectedIndex].style.width = "15px";
      blueWhenClicked[selectedIndex].style.height = "15px";
      //7
      blackWhenClicked[selectedIndex].style.width = "25px";
      blackWhenClicked[selectedIndex].style.height = "10px";
      //8
      whiteWhenClicked[selectedIndex].style.width = "15px";
      whiteWhenClicked[selectedIndex].style.height = "15px";
      // Library cards image assets
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "100%";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "0";
      indexColorClicked.push(index);
      colorOptions.push(blackWhenClicked);
    }
  });
  Array.from(whiteWhenClicked).forEach((onwhite, index) => {
    onwhite.onclick = whiteCclicked;
    function whiteCclicked() {
      selectedIndex = index;
      indexColorClicked.pop();
      colorOptions.pop();
      //  Library cards image asset script
      /*1*/ redImgAsset[selectedIndex].style.opacity = "0";
      /*2*/ greenImgAsset[selectedIndex].style.opacity = "0";
      /*3*/ brownImgAsset[selectedIndex].style.opacity = "0";
      /*4*/ yellowImgAsset[selectedIndex].style.opacity = "0";
      /*5*/ pinkImgAsset[selectedIndex].style.opacity = "0";
      /*6*/ blueImgAsset[selectedIndex].style.opacity = "0";
      /*7*/ blackImgAsset[selectedIndex].style.opacity = "0";
      /*8*/ whiteImgAsset[selectedIndex].style.opacity = "100%";
      // library cards selected color indicator
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "100%";
      // library cards colored circls click script
      //1
      redWhenClicked[selectedIndex].style.width = "15px";
      redWhenClicked[selectedIndex].style.height = "15px";
      //2
      greenWhenClicked[selectedIndex].style.width = "15px";
      greenWhenClicked[selectedIndex].style.height = "15px";
      //3
      brownWhenClicked[selectedIndex].style.width = "15px";
      brownWhenClicked[selectedIndex].style.height = "15px";
      //4
      yellowWhenClicked[selectedIndex].style.width = "15px";
      yellowWhenClicked[selectedIndex].style.height = "15px";
      //5
      pinkWhenClicked[selectedIndex].style.width = "15px";
      pinkWhenClicked[selectedIndex].style.height = "15px";
      //6
      blueWhenClicked[selectedIndex].style.width = "15px";
      blueWhenClicked[selectedIndex].style.height = "15px";
      //7
      blackWhenClicked[selectedIndex].style.width = "15px";
      blackWhenClicked[selectedIndex].style.height = "15px";
      //8
      whiteWhenClicked[selectedIndex].style.width = "25px";
      whiteWhenClicked[selectedIndex].style.height = "10px";
      // Library cards image assets
      /*1*/ redIndicator[selectedIndex].style.opacity = "0";
      /*2*/ greenIndicator[selectedIndex].style.opacity = "0";
      /*3*/ brownIndicator[selectedIndex].style.opacity = "0";
      /*4*/ yellowIndicator[selectedIndex].style.opacity = "0";
      /*5*/ pinkIndicator[selectedIndex].style.opacity = "0";
      /*6*/ blueIndicator[selectedIndex].style.opacity = "0";
      /*7*/ blackIndicator[selectedIndex].style.opacity = "0";
      /*8*/ whiteIndicator[selectedIndex].style.opacity = "100%";
      indexColorClicked.push(index);
      colorOptions.push(whiteWhenClicked);
    }
  });
  const colorOptions = [colorSelected];
  // function for to carrying out desired actions when the (download button) is clicked
  Array.from(downloadButton).forEach((downloadBtn, index) => {
    downloadBtn.onclick = downloadBtnWhenClicked;
    function downloadBtnWhenClicked() {
      selectedIndex = index;
      switch (colorOptions[0]) {
        case colorSelected:
          triggerDownload(redImgAsset[selectedIndex].src);
          break;
        case redWhenClicked:
          triggerDownload(redImgAsset[selectedIndex].src);
          break;
        case greenWhenClicked:
          triggerDownload(greenImgAsset[selectedIndex].src);
          break;
        case brownWhenClicked:
          triggerDownload(brownImgAsset[selectedIndex].src);
          break;
        case yellowWhenClicked:
          triggerDownload(yellowImgAsset[selectedIndex].src);
          break;
        case pinkWhenClicked:
          triggerDownload(pinkImgAsset[selectedIndex].src);
          break;
        case blueWhenClicked:
          triggerDownload(blueImgAsset[selectedIndex].src);
          break;
        case blackWhenClicked:
          triggerDownload(blackImgAsset[selectedIndex].src);
          break;
        case whiteWhenClicked:
          triggerDownload(whiteImgAsset[selectedIndex].src);
          break;
        default:
          console.log("No valid color selected");
      }
      function triggerDownload(imageSrc) {
        const downloadLink = document.createElement("a");
        downloadLink.href = colorOfImgAsset(imageSrc); // If colorOfImgAsset processes the image src
        downloadLink.download = "vmacAsset.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    }
  });
  // Library editor button
  Array.from(editorButton).forEach((editorBtn, index) => {
    editorBtn.onclick = editorButtonWhenClicked;
    function editorButtonWhenClicked() {
      selectedIndex = index;
      editorPopUp.style.display = "flex";
    }
  });
  // Libary card share button
  Array.from(shareButton).forEach((shareBtn, index) => {
    shareBtn.onclick = downloadBtnWhenClicked;
    function downloadBtnWhenClicked() {
      selectedIndex = index;
      // Web Share API
      shareBtn.onclick = async function () {
        if (navigator.share) {
          try {
            await navigator.share({
              title: "Check this out!",
              text: "Here’s something cool I found:",
              url: "https://vmac.design/library-overlay",
            });
            console.log("Shared successfully");
          } catch (err) {
            console.log("Share failed:", err);
          }
        }
        // Fallback: prompt user to copy the link
        else {
          window.prompt("Copy and share this link:", linkToShare);
        }
      };
    }
  });
}
