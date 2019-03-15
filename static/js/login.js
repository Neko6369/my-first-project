document.onreadystatechange = function ()
{
  if (document.readyState === 'complete')
    {
        loadText();
    }
}
function loadText()
    {
        var btnUpFile = document.getElementById("btnUpFile");
        var inputFile = document.getElementById("inputFile");
        var title = document.getElementById("title");
        var output_file = document.getElementById("output_file");
        btnUpFile.innerHTML="Tải lên";
        inputFile.innerHTML="Chọn hình";
        title.innerHTML="DỰ ĐOÁN CHỮ SỐ TRONG HÌNH";
        output_file.innerHTML="Kết quả";
	}
function js_upoad()
{
	$.ajax({
        url: "/upload",
        type: "POST",
        success: function (resp) {
            output_file.innerHTML= resp;
        }
    })
}
