document.getElementById('saveTxt').addEventListener('click', function () {
    let noteContent = document.getElementById('noteArea').value;
    if(noteContent !== '') {
        downloadToFile(noteContent, 'SullNotes.txt', 'text/plain');
    } else {
        alert('Cannot save empty note!');
    }
});

document.getElementById('saveWord').addEventListener('click', function () {
    let noteContent = document.getElementById('noteArea').value;
    if(noteContent !== '') {
        // We're using a Blob to create the Word file
        const blob = new Blob([noteContent], {type: 'text/plain'});
        saveAs(blob, "SullNotes.docx");
    } else {
        alert('Cannot save empty note!');
    }
});

document.getElementById('savePdf').addEventListener('click', function () {
    let noteContent = document.getElementById('noteArea').value;
    if(noteContent !== '') {
        const doc = new jsPDF();
        doc.text(noteContent, 10, 10);
        doc.save("SullNotes.pdf");
    } else {
        alert('Cannot save empty note!');
    }
});

const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});
  
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
    URL.revokeObjectURL(a.href);
};
