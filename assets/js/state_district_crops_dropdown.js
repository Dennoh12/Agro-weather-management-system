
// State, District and crop Options for crop prediction
// var state_arr = new Array("Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir ", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana ", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal");

var state_arr = new Array (
    "Bomet", "Baringo", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu", "Garissa", "Homa Bay",
    "Isiolo", "Kwale", "Kilifi", "Kirinyaga", "Kiambu", "Kajiado", "Kericho", "Kakamega",
    "Kisumu", "Kisii", "Laikipia", "Kitui", "Lamu", "Machakos", "Makueni", "Mandera", "Meru",
    "Migori", "Marsabit", "Mombasa", "Muranga", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira",
    "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita Taveta", "Tana River", "Tharaka Nithi",
    "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
);

var s_a = new Array();
s_a[0]="";
s_a[1]="Sotik | Chepalungu | Bomet Central | Bomet East | Konoin";
s_a[2]="Tiaty | Baringo North | Barindo Central | Baringo South | Mogotio | Eldama Ravine";
s_a[3]="Mt-Elgon | Sirisia | Kabuchai | Bumula | Kanduyi | Webuye East | Webuye West | Kimilili | Tongaren";
s_a[4]="Teso North | Teso South | Nambale | Matayos | Butula | Funyula | Budalangi";
s_a[5]="Marakwet North | Marakwet South | Marakwet East | Marakwet West";
s_a[6]="Igembe South | Igembe Central | Igembe North | Tigania West | Tigania East | North Imenti | Buuri | Central Imenti | South Imenti";
s_a[7]="Garissa Township | Balambala | Dadaab | Fafi | Ijara";
s_a[8]="Kasipul | Kabondo Kasipul | Karachuonyo | Rangwe | Homa bay Town | Ndhiwa | Suba North | Suba South";
s_a[9]="Isiolo North | Isiolo South";
s_a[10]="Matuga | Lungalunga | Kinango | Msambweni";
s_a[11]="Kilifi North | Kilifi South | Kaloleni | Rabai | Ganze | Malindi | Magarini";
s_a[12]="Mwea | Gichugu | Ndia | Kirinyaga Central";
s_a[13]="Gatundu North | Gatundu South | Juja | Thika Town | Ruiru | Githunguri | Kiambu | Kiambaa | Kabete | Kikuyu | Limuru | Lari";
s_a[14]="Kajiado North | Kajiado South | Kajiado Central | Kajiado East | Kajiado West";
s_a[15]="Kipkelion East | Kipkelion West | Ainamoi | Bureti | Belgut | Sigowet/Soin";
s_a[16]="Lugari | Likuyani | Malava | Lurambi | Navakholo | Mumias West | Mumias East | Matundu | Butere | Khwisero | Shinyalu | Ikolomani";
s_a[17]="Kisumu East | Kisumu West | Kisumu Central | Seme | Nyando | Muhoroni | Nyakach";
s_a[18]="Bonchari | South Mugirango | Bomachoge Borabu | Bobasi | Bomachoge chache | Nyaribari Masaba | Nyaribari Chache | Kitutu Chache North | Kitutu Chache South";
s_a[19]="Laikipia North | Laikipia Central | Laikipia East | Laikipia West | Nyahururu";
s_a[20]="Kitui East | Kitui West | Kitui Central | Kitui Rural | Kitui South | Mwingi North | Mwingi West | Mwingi Central";
s_a[21]="Lamu East | Lamu West";
s_a[22]="Masinga | Yatta | Matungulu | Kangundo | Mwala | Kathiani | Machakos Town | Mavoko";
s_a[23]="Makueni | Kalungu | Mukaa | Kibwezi East | Kibwezi West | Kilome";
s_a[24]="Mandera West | Mandera South | Banissa | Mandera North | Mandera East | Lafey";
s_a[25]="Igembe East | Igembe South | Igembe North | Igembe West | Buuri | Imenti South | Imenti North | Imenti Central";
s_a[26]="Rongo | Awendo | Suna East | Suna West | Uriri | Nyatike | Kuria West | Kuria East | Ntimaru | Mabera";
s_a[27]="Laisamis | North Norr | Moyale | Saku";
s_a[28]="Changamwe | Jomvu | Kisauni | Nyali | Likoni | Mvita";
s_a[29]="Kiharu | Mathioya | Kangema | Gatanga | Kigumo | Kahuro | Murang'a South";
s_a[30]="Dagoretti South | Dagoretti Central | Embakasi East | Embakasi South | Embakasi North | Embakasi West | Kamukunji | Kasarani | KIbra | Langata | Makadara | Mathare | Roysambu | Ruaraka | Starehe | Westlands";
s_a[31]="Nakuru Town East | Nakuru Town West | Njoro | Molo | Gilgil | Naivasha | Kuresoi North | Kuresoi South | Rongai | Subukia | Bahati";
s_a[32]="Mosop | Emgwen | Aldai | Tinderet | Nandi Hills | Chesumei";
s_a[33]="Transmara West | Transmara East | Narok North | Narok South | Narok West | Narok East";
s_a[34]="Nyamira South | Nyamira North | Borabu | Manga | Masaba North";
s_a[35]="Kinangop | Kipipiri | ol Joro Orok | Ndaragwa | Ol Kalou";
s_a[36]="Nyeri Town | Mathira East | Mathira West | Tetu | Mukurweni | Kieni East | Kieni West | Othaya";
s_a[37]="Samburu East | Samburu West | Samburu North";
s_a[38]="Alego Usonga | Ugenya | Gem | Bondo | Ugunja | Rarieda";
s_a[39]="Voi | Mwatate | Wundanyi | Taveta";
s_a[40]="Bura | Galole | Garsen";
s_a[41]="Tharatha North | Tharaka South | Chuka | Igambang’ombe | Muthambi | Maara";
s_a[42]="Cherengany | Endebess | Kwanza | Kiminini | Saboti";
s_a[43]="Loima | Turkana West | Turkana East | Turkana North | Turkana South | Turkana Central";
s_a[44]="Soy | Tarbo | Ainabkoi | Kapseret | Kesses | Moiben";
s_a[45]="Emuhaya | Sabatia | Luanda | Hamisi | Vihiga";
s_a[46]="Wajir North | Wajir South | Wajir East | Wajir West | Eldas | Tarbaj";
s_a[47]="West Pokot | North Pokot | Pokot South | Pokot Central";



function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select District','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}



// dropdown for rainfall prediction

var months = ["ANNUAL", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "Jan-Feb", "Mar-May", "Jun-Sep", "Oct-Dec"]; 

function print_months(month_id) {
    var option_months = document.getElementById(month_id);
    option_months.length = 0;
    option_months.options[0] = new Option('Select Month', '');
    option_months.selectedIndex = 0;
    for (var i = 0; i < months.length; i++) {
        option_months.options[option_months.length] = new Option(months[i], months[i]);
    }
}


var region = ["ANDAMAN & NICOBAR ISLANDS", "ARUNACHAL PRADESH", "ASSAM & MEGHALAYA", "NAGA MANI MIZO TRIPURA", "SUB HIMALAYAN WEST BENGAL & SIKKIM", "GANGETIC WEST BENGAL", "ORISSA", "JHARKHAND", "BIHAR", "EAST UTTAR PRADESH", "WEST UTTAR PRADESH", "UTTARAKHAND", "HARYANA DELHI & CHANDIGARH", "PUNJAB", "HIMACHAL PRADESH", "JAMMU & KASHMIR", "WEST RAJASTHAN", "EAST RAJASTHAN", "WEST MADHYA PRADESH", "EAST MADHYA PRADESH", "GUJARAT REGION", "SAURASHTRA & KUTCH", "KONKAN & GOA", "MADHYA MAHARASHTRA", "MATATHWADA", "VIDARBHA", "CHHATTISGARH", "COASTAL ANDHRA PRADESH", "TELANGANA", "RAYALSEEMA", "TAMIL NADU", "COASTAL KARNATAKA", "NORTH INTERIOR KARNATAKA", "SOUTH INTERIOR KARNATAKA", "KERALA", "LAKSHADWEEP"];

function print_region(region_id) {
    var option_region = document.getElementById(region_id);
    option_region.length = 0;
    option_region.options[0] = new Option('Select Region', '');
    option_region.selectedIndex = 0;
    for (var i = 0; i < region.length; i++) {
        option_region.options[option_region.length] = new Option(region[i], region[i]);
    }
}


// district crop dropdown for yield prediction

const cropOptions = {
  BAGALKOT: {
	Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Safflower', 'Sunflower', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Black pepper', 'Brinjal', 'Cashewnut', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tobacco', 'Tomato', 'Turmeric']
  },
  BANGALORE_RURAL: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Paddy', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Tobacco', 'Turmeric']
  },
  BELGAUM: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Tobacco', 'Turmeric']
  },
  BELLARY: {
    Kharif: ['Castor seed', 'Cowpea(Lobia)', 'Dry ginger', 'Gram', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad', 'Cotton(lint)'],
    Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Tomato', 'Turmeric']
  },
  BENGALURU_URBAN: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Paddy', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Rice', 'Sunflower'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Coconut ', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Turmeric']
  },
   BIDAR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Dry chillies', 'Gram', 'Groundnut', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
    Summer: ['Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Rice', 'Sunflower'],
	WholeYear: ['Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugar cane', 'Sweet potato', 'Tomato', 'Turmeric']
  },
  BIJAPUR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Potato', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Potato', 'Sunflower'],
	WholeYear: ['Banana', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sugarcane', 'Sweet potato', 'Tomato', 'Turmeric', 'Coconut']
  },
  CHAMARAJANAGAR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Gram', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Tapioca', 'Tomato', 'Turmeric', 'Tobacco']
  },
  CHIKBALLAPUR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Small millets', 'Sunflower'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Banana', 'Cashewnut', 'Coconut', 'Coriander', 'Dry ginger', 'Garlic', 'Sugarcane', 'Sweet potato', 'Turmeric']
  },
  CHIKMAGALUR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Rice', 'Sunflower'],
    WholeYear: ['Arecanut', 'Cardamom', 'Coriander', 'Garlic', 'Sugarcane', 'Turmeric', 'Black pepper', 'Coconut', 'Dry chillies', 'Banana', 'Onion', 'Potato', 'Sweet potato', 'Tapioca', 'Tobacco', 'Peas & beans (Pulses)', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Grapes', 'Mango', 'Other Fresh Fruits', 'Pome Fruit', 'Tomato', 'Cotton(lint)', 'Dry ginger', 'Cashewnut', 'Papaya', 'Sannhamp']
  },
  CHITRADURGA: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sugarcane', 'Tomato', 'Turmeric', 'Tobacco']
  },
  DAKSHIN_KANNAD: {
    Kharif: ['Black pepper', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Horse-gram', 'Moong(Green Gram)', 'Other Kharif pulses', 'Paddy', 'Rice', 'Sesamum', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Moong(Green Gram)', 'Other Rabi pulses', 'Paddy', 'Rice', 'Urad'],
    Summer:['Cowpea(Lobia)', 'Dry chillies', 'Maize', 'Paddy', 'Rice'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Dry chillies', 'Dry ginger', 'Mango', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Turmeric']
  },
  DAVANGERE: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad', 'Cotton(lint)'],
    Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tobacco', 'Tomato', 'Turmeric']
  },
  DHARWAD: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Potato', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
  },
  GADAG: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Rice', 'Sunflower'],
	WholeYear:['Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
  },
  GULBARGA: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Bajra', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
    Summer: ['Bajra', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Rice', 'Sunflower'],
	WholeYear: ['Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Cotton(lint)', 'Coriander', 'Coconut ', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tobacco', 'Tomato', 'Turmeric']
  },
  HAVERI: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
  },
  HASSAN: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Turmeric']
  },
  KODAGU: {
    Kharif: ['Arhar/Tur', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sesamum', 'Sunflower'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rice'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Maize', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Dry chillies', 'Dry ginger', 'Mango', 'Onion', 'Other Fresh Fruits', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tobacco', 'Tomato', 'Turmeric']
  },
  KOLAR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower'],
    Summer: ['Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Arecanut', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Dry chillies', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Tomato', 'Turmeric']
  },
  KOPPAL: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Peas & beans (Pulses)', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
    Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Rice', 'Sunflower'],
	WholeYear: ['Banana', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Coconut', 'Coriander', 'Dry chillies', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Turmeric']
  },
  MANDYA: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Paddy', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad', 'Potato'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Arecanut', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Tobacco', 'Turmeric']
  },
  MYSORE: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cotton(lint)', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Turmeric']
  },
  RAMANAGARA: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice'],
    Summer: ['Dry chillies', 'Groundnut', 'Maize', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Banana', 'Black pepper', 'Cashewnut', 'Coconut', 'Coriander', 'Dry ginger', 'Garlic', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Turmeric', 'Tobacco']
  },
  RAICHUR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Rice', 'Sunflower'],
	WholeYear: ['Banana', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Coriander', 'Coconut', 'Dry chillies', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
  },
  SHIMOGA: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Onion', 'Other Fresh Fruits', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Tapioca', 'Tobacco', 'Tomato', 'Turmeric']
  },
  TUMKUR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tobacco', 'Tomato', 'Turmeric']
  },
  UDUPI: {
    Kharif: ['Dry chillies', 'Dry ginger', 'Groundnut', 'Horse-gram', 'Moong(Green Gram)', 'Other Kharif pulses', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Maize', 'Rice'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Dry chillies', 'Dry ginger', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Turmeric']
  },
  UTTAR_KANNAD: {
    Kharif: ['Arhar/Tur', 'Black pepper', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Other Kharif pulses', 'Paddy', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Soyabean', 'Sunflower'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
  },
  YADGIR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Rice', 'Sesamum', 'Small millets', 'Sunflower'],
    Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Rice', 'Sunflower'],
	WholeYear: ['Coconut', 'Coriander', 'Mesta', 'Sugarcane', 'Sweet potato']
  } 
};
