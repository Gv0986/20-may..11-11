const text =
" I'll recommend earphones 🎧 ...Hello bache ... it's 11 11 and it's time for wish 😁😁vaise kya mangu aaj ...haa yaad aya chodo mangte mai rahunga he but pahele kal aapka result hai soo mam like don't worry Don't take stress... sub aacha hoga ...you are good teacher... apne bache uff😜... sorry apne student ko itne aache se sikhate ho khudko toh mam best karoge i believe 🤗...orr yrr like itna tention stress lena nahi chahiye...galat baat hai yrr yeh ....or or haa mam Don't worry yrr uss time mujhe bus voh chiz aachi nahi lagi thi baad me toh  mai sub bhul bhi Gaya 😅....mai nahi hu yrr gussa ulta mene toh thode time baad aapko reels bhejne k liye bhi dhundh liya tha ... Bache yrr aapse milne ka mun kar raha hai ..aapko hug karne ka mun kar raha hai ...kiss is included 🤭...haa yrr kuch or bhi miss kar raha hu 😁😋...dil firse taste maang raha hai ....bache yrr mai aisi baatein likhta hu or khud he excited ho jata hu pata nahi kyu ...aisa mun karta hai naa abhi apko pakad k bed pe gira du 😆 afsoos kar nahi sakta ... Kasam se itna sochta hu na ki saamne aaoge toh aesa aesa karunga or jub samne aate ho toh bus pyar karne ka mun karta hai  gale laga k rakhe rahu bus aapko ...yrr you are soo sweet mam ... chocolates se jada aap aache lagte he yrr like ek he me  packet sub kuch milta hai kit-kat si baatein ...or dark chocolate hai aapki aankhein... strawberry se gaal .....yrr melody toh unhi badnaam hai  inse chocolaty toh mere bache k honton ka jaam hai ... dairy milk sa taste ummmm😋 yummy yummy.... Milky mist sa Sharir yrr pura ka pura aapko kha jaane ka mun karta hai 😋...i love you mam ...I will love you when you're happy..I will love you when you're sad..I will love you when you smile...I will love you when you cry....I will love you when we sleep.I will love you when we argue....I will love you when you're healthy....I will love you when you're sick.....I will love you when you're mine. ...I will love you when you're not....I will love when you love me.....I will love you when you don't....But most importantly....I will love you always.....I will love you forever....i love you more than anything bache 🥺....Meri un saanso ka mtlb bhi tum ho meri ki Un duaao ki hakeekat bhi tum ho Mere un karmo ka praish-chitt bhi tum ho Meri us kashti ki sawari bhi tum ho Mere un khwaboo ka mehmaan bhi tum ho Mere kaan sunna chahte hai wo dastaan bhi tum ho Meri nigaahe dekhna chahe wo haseen nazara bhi tum ...Tumhe pata hai??? Wo kehte hai ki marne ke baad insaan ka dimaag 7 min jinda rehta hai aur apne jindagi ke saare haseen lamhe dekhta hai....Shayad mere wo 7 min bhi tum hi ho...❤❤❤yrr ek level se uper aapse mohabbat ho gayi hai mam pata hai dur lagta hai yrr Tum Choti Baccho Si Ho, Kabhi Agar Daant Diya Maine Toh?....Tum Bolti Bhi Bahut Ho, Kabhi Agar Akele Chhod Diya Maine Toh?....Tum Choti Cheezon Mein Khushi Dhoond Leti Ho, Kabhi Agar Dukhi Kar Diya Maine Toh?....Tumhari Aankhein Bahut Pyaari Hai, Kabhi Agar Inhe Rula Diya Maine Toh? ...yrr like bache pahele he sorry bolunga agar mene future me koi galti kar di toh pahele he sorry 😐..aap na kahi nahi jaoge mujhe chod k kahi bhi nahi ...i need you mam now... then.... always.....be mine bache hud se jada khudko mere naam krdo 🥺...mai aapko pura apnana chahta hu ...ek hud hoti hai na mam ...uss hud se jada aapko pana chahta hu ...i love you darling 💕 my sweetheart 💋 my teddy 🧸...my cute sa bacha 🤭...my everything ❤️... shukriya mere  dil k dahelij pe dastak k liye...shukriya jo aap mere zindagi me ... shukriya jo aapne iss zindagi ko or haseen bana diya... shukriya jo aapne mujhe apna liya ... shukriya jo apne dil me basa liya ...  "
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
