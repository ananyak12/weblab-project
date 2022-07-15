const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const session = require('express-session');
var app = express();
app.use(express.static(__dirname+'/views/'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
const connectDB = async () =>{
  try{
    const conn = await mongoose.connect("mongodb+srv://chatbot123:chatbot123@cluster0.9s9jx.mongodb.net/Rchatbot?retryWrites=true&w=majority",{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  }
  catch(err){
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};



connectDB()

const userSchema = new mongoose.Schema({
  item: String,
});

const UserList = mongoose.model('UserList', userSchema);

const cSchema = new mongoose.Schema({
  citem:String,
});
const Cl = mongoose.model('Cl', cSchema);

const qSchema = new mongoose.Schema({
  qitem:String,
  aitem:String,
});
const Ql = mongoose.model('Ql', qSchema);
const Ql1 = mongoose.model('Ql1',qSchema);
const Ql2 = mongoose.model('Ql2',qSchema);
const Ql3 = mongoose.model('Ql3',qSchema);
const Ql4 = mongoose.model('Ql4',qSchema);
const lSchema = new mongoose.Schema({
  id:String,
  branch:String,
  date:Date,
});
const logList = mongoose.model('logList',lSchema);

app.get("/", (req,res)=>{
   const fetchData = async()=>{
     const data = await UserList.find({})
     const cat = await Cl.find({});
     const ql = await Ql.find({});
     const ql1 = await Ql1.find({});
     const ql2 = await Ql2.find({});
     const ql3 = await Ql3.find({});
     const ql4 = await Ql4.find({});
     res.render('india', {items:data, categories:cat,questions:ql,questions1:ql1,questions2:ql2,questions3:ql3,questions4:ql4})
   }
   fetchData()
})
app.post("/",(req,res)=>{
  const pushData = async()=>{
    var response = {
      id:req.body.id,
      branch:req.body.branch,
      date:new Date()
    }
    await logList.insertOne({response});
  }
})
var port = process.env.PORT || 3000;
app.listen(port,"0.0.0.0",function(){
  console.log("Listening on port");
});
/*const userSchema = new mongoose.Schema({
  item: String,
});

const UserList = mongoose.model('UserList', userSchema);

const cSchema = new mongoose.Schema({
  citem:String,
});
const Cl = mongoose.model('Cl', cSchema);

const qSchema = new mongoose.Schema({
  qitem:String,
  aitem:String,
});
const Ql = mongoose.model('Ql', qSchema);
const Ql1 = mongoose.model('Ql1',qSchema);
const Ql2 = mongoose.model('Ql2',qSchema);
const Ql3 = mongoose.model('Ql3',qSchema);
const Ql4 = mongoose.model('Ql4',qSchema);
const Ql5 = mongoose.model('Ql5',qSchema);

const lSchema = new mongoose.Schema({
  id:String,
  branch:String,
  date:Date,
});
const logList = mongoose.model('logList',lSchema);
app.listen(3000,function(req,res){console.log('server running on 3000');});
app.set('view engine','ejs');
app.get('/' ,function(req,res){
  UserList.find({}, function(err, items){
    Cl.find({}, function(err, categories){
      Ql.find({}, function(err, questions){
        Ql1.find({}, function(err, questions1){
          Ql2.find({}, function(err, questions2){
            Ql3.find({}, function(err, questions3){
              Ql4.find({}, function(err, questions4){
                Ql5.find({}, function(err, questions5){
    if(items.length == 0){
      UserList.insertMany([
        {item: 'Student'},
        {item: 'Parent'},
        {item: 'Faculty'},
        {item: 'Casual'},
        ]);

        Cl.insertMany([
          {citem: 'Admission'},
          {citem: 'Clubs'},
          {citem: 'Hostels'},
          {citem: 'Infrastructure'},
          {citem: 'Alumni and Achievements'},
          {citem: 'Syllabus and Exams'},
          ]);

          Ql.insertMany([
            {qitem: 'Courses in RIT', aitem:'B.E, M.E, B.Arch, M.Arch, MCA, MBA'},
            {qitem: 'Eligibility for B.E through CET and ComedK', aitem:'The Original documents shown in the checklist on the website with 03 Set of attested copies should be submitted'},
            {qitem: 'Scholarships', aitem:'SC/ST/Minority/Defence/Category LILIII/Brahmins community students are eligible'},
            {qitem: 'Placements', aitem:'To train the students in personality development, industrial orientation and thus, help them get placed in reputed industries'},
            {qitem:'Prerequisites for Management admission', aitem:'A candidate who has passed 10 + 2 pattern of examination with Physics and Mathematics as compulsory subjects'},
            {qitem:'Prerequisites for NRI admission', aitem:'Children of Indian Workers in the Gulf Countries are eligible for NRI Quota'},
            {qitem:'Prerequisites for B.Arch', aitem:'A candidate who has passed 10 + 2 pattern of examination'},
            {qitem: 'PhD and PG courses' ,aitem : 'Research programs leading to Ph.D/M.Sc (Engg.) are available in all Engineering and Science departments.'},
            {qitem: 'Fees structures', aitem: 'Scroll to the Fee Structure section to find the necessary information on the website'},
            ]);

            Ql1.insertMany([
              {qitem: 'Extra-curricular clubs', aitem:'There is a Department of Extra curricular activities called DECA with many dance and art clubs.'},
              {qitem: 'Sports clubs', aitem:'Ramaiahs sports club is a very diverse sports team involving both indoor and outdoor sports.'},
              {qitem: 'Technical teams', aitem:'Every department in RIT have dedicated technical clubs from aeromodelling team to a satellite team'},
              {qitem: 'IEEE', aitem:'The IEEE-RIT Student Branch was inaugurated in RIT in November 2003. The branch endeavors to enrich the students of RIT with the latest developments in various fields of technology and research and ensure that their competency levels meet all the required standards in today’s industry and participation in a kaleidoscope of technical events throughout the year, implicitly emphasizing on extra-curricular activities in a student’s life.'},
              {qitem: 'NSS', aitem:'National Service Scheme, popularly known as NSS, was launched in 1969 under the Ministry of Youth Affairs & Sports Govt. of India in 37 Universities involving 40,000 students with primary focus on the development of personality of students through community service. This scheme requires full participation and involvement of the volunteers for a mandatory period of two years.'},
              {qitem: 'NCC', aitem:'National Cadet Corps (NCC) is engaged in grooming the youth into disciplined and patriotic citizen. The NCC programme of the college plays an important role in installing discipline as well as preparing students for productive citizenship'},
              {qitem: 'Fests', aitem:'From the main cultural fest Udhbhav to IEEE technical fests, RIT has many fests happening throughout an academic year'},
              ]);

              Ql2.insertMany([
                {qitem: 'Location of college hostels', aitem:'Hostels are located around and very near to the campus'},
                {qitem: 'Amenities, Fees, Services', aitem:'Details can be found on msrit.edu/facilities/hostel section on the website'},
                ]);

                Ql3.insertMany([
                  {qitem: 'Labs', aitem:'All departments have state-of-the-art laboratories to conduct experiments.'},
                  {qitem: 'Parking lots', aitem:'The institute has spacious parking facility which can accommodate 1720 two wheelers and 100 four wheelers. Multi level, wide and sufficient parking places are provided separately for staff and students. 24 x 7 security and CCTV cameras are also installed for all parking places.'},

                  {qitem: 'Canteens', aitem:'MSRIT has two food courts providing ample choice to students. The two full fledged canteens provide hygienic and sumptuous meals both in north Indian and south Indian styles. Quick snacks and fresh fruit juice counters are also available in the canteens.'},
                  {qitem: 'Seminar Halls and Auditoriums', aitem:'The following is the list of auditoriums with seating capacities:Apex Block Auditorium: 1000 Seating Capacity. ESB Seminar hall 1: 315 Seating Capacity. ESB Seminar hall 2: 140 Seating Capacity. DES Hi-Tech Seminar hall: 200 Seating Capacity. LHC Seminar Hall 1: 115 Seating Capacity. LHC Seminar Hall 2: 115 Seating Capacity'},

                  {qitem: 'Library', aitem:'Details can be found on facilities/library section on the website'},
                  ]);

                  Ql4.insertMany([
                    {qitem: 'Notable Alumni', aitem:'Some notable Alumni are Rashmika Mandanna, Kanan Gill, Sajjan Jindal'},
                    {qitem: 'Number of publications per year', aitem:'We have an average of 350 Publications per year. We have an average of 96% Placement Percentage'},
                    {qitem: 'Centers of Excellence', aitem:'This Centre of Excellence is envisaged to conduct research into the design and development of advanced systems interacting with each other directly and through the Internet.'},
                    {qitem: 'Incubation centers', aitem:'Ramaiah Institute of Management supports startups through its Innovation and Incubation Centre. It enables creation of entrepreneurs who create and deliver value. The centre nurtures ideas, mentors them to develop feasible business proposals, provid'},
                    {qitem: 'Sports achievemnets', aitem:'Secured Silver Medal in Long Jump event in All India Inter University Athletic Meet & Amateur Athletic Meet and many more can be found on the website'},
                    {qitem: 'International exposure', aitem:'RIT encourages students to attend International conferences and competitions representing the college'},
                    ]);

                    Ql5.insertMany([
                      {qitem: 'Syllabus', aitem:'sylabus can be found on the msrit.edu/deptcse/home section on the website'},
                      {qitem: 'Recorded lectures', aitem:'Can be accessed through the impartus.com/login/#/ facility'},
                      {qitem: 'Previous years question papers', aitem:'has to be accessed within college premises in the digital library'},
                      {qitem: 'SEE Exam fees', aitem:'can be found on the careerbook.federalbank website'},
                      ]);

    res.render('india', {items:items,categories:categories,questions:questions,questions1:questions1,questions2:questions2,questions3:questions3,questions4:questions4,questions5:questions5});
    return;
  }
  else{
    res.render('india',{items:items,categories:categories,questions:questions,questions1:questions1,questions2:questions2,questions3:questions3,questions4:questions4,questions5:questions5});
  }

});
});
});
});
});
});
});
});
});*/

app.post('/', function(req,res){
  var id = req.body.id;
  var branch = req.body.branch;
  var dt = new Date();
  new logList({
    id:id,
    branch:branch,
    date:dt,
  }).save();
});

app.post('/', function(req,res){
  var pid = req.body.P_id;
  var branch = req.body.branch;
  var dt = new Date();
  new logList({
    id:pid,
    branch:branch,
    date:dt,
  }).save();
});
