
function httpRequest(url,callback){

	var xhr = new XMLHttpRequest();

	xhr.open("GET",url,true);

	xhr.onreadystatechange = function(){

		if (xhr.readyState==4){

			callback(xhr.responseText);
		}

	}

	xhr.send();
}


function getCurrentTabId(callback)   //获取当前标签的ID值
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        
        callback(tabs.length ? tabs[0].id: null);
    
    });
}



function sendMessageToContentScript(message, callback)
{
    getCurrentTabId(function(tabId){

        chrome.tabs.sendMessage(tabId, message, function(response){

            callback(response);

        });
    });
}


sendMessageToContentScript('closecarrot', function(response){

        	console.log(response);

    });



















