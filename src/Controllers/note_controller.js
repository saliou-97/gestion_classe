const db=require("./../models/index.js")
const readXlsxFile = require("read-excel-file/node");
const excel=require("exceljs")
const Note=db.db.note;

module.exports={
    createNote(req, res) {
        Note.create(req.body)
        .then(note => {
            res.status(201).json(note);
        })
        .catch(error => {
            res.status(500).json(error)});
    },
    async updateNote(req, res) {
        const id = req.params.id;
        const NoteUpdated =  await Note.update(req.body, {where: {id: id}});
        res.status(201).json(NoteeUpdated);
    },
    getAllNote(req, res) {
        //res.status(200).json(await Livre.findAll());
        Note.findAll()
        .then(function(Note){res.status(200).json(Note)})
        .catch(function(error){res.status(500).json(error)});
    },
    async getNoteByID(req, res){
        const id = req.params.id;
        //Livre.findOne({where: {id: idLivre}})
        res.status(200).json(await Note.findOne({id:req.params.id}));
    },
    deleteNote(req, res) {
        const id = req.params.id;
        Note.destroy({where: {id: id }})
        .then(() => {res.status(200).json({status: 'success', message: 'Depense bien supprimé'})})
        .catch((err) =>{res.status(500).json({status: 'error', message: JSON.stringify(err)})});
    },
      upload  (req, res) {
        try {
          if (req.file == undefined) {
            return res.status(400).send("Entrer le fichier");
          }
        //  const id_prof=req.body.id
      
          let path =
            __basedir + "uploadFile/" + req.file.filename;
            console.log(path)
            console.log(req.file.filename)
            console.log(__dirname)
            
      
          readXlsxFile(path).then((rows) => {
            console.table(rows)
            // Pour sauter l'entete
            rows.shift();
      
            let notes = [];
      
            rows.forEach((row) => {
            //Note.findOne({where:{}})
              let note = {
                code_eleve: row[0],
                type_note: row[1],
                date_note : row[2],
                note: row[3],
                //id_prof :  id_prof
              };
      
              notes.push(note);
            });
      
            Note.bulkCreate(notes)
              .then(() => {
                res.status(200).send({
                  message: "Enregistrer: " + req.file.originalname,
                });
              })
              .catch((error) => {
                res.status(500).send({
                  message: "Non enregistrer!",
                  error: error.message,
                });
              });
          });
        } catch (error) {
          //console.log(error);
          res.status(500).send({
            message: "Non enregistrer: " + req.file.originalname,
            "error":error
          });
        }
      }
}