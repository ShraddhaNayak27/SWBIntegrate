
'ProdColNo=fn_FindColNumber("Prod. Nbr.")
'	ItemRow = Browser("Browser_SWBLogin").Page("Page_ManageRFxAndNegotiate").Frame("Frame_ManageRFxAndNegotiate").WebTable("Table_SearchResults").GetRowWithCellText(sProd,ProdColNo,2)'Start looking from 2nd row or else error
	
'Script Information

'#######################################################################################################################
'Description		    : Initilize tests and run from local
'Test Tool/Version		: HP UFT 14.3
'Framework name/Version	: UFTALMIntegratedTestFramework - Local_v1.2
'Application			: InfoHub
'Created By				: Test Automation team
'Created On				: 10/09/2018
'######################################################################################################################

'wait 1
'Dim fchecked


''Browser("Browser_SWBLogin").Page("My Dashboard").Frame("Frame").WebCheckBox("CheckBox_DelvyOpt").GetROProperty ("value")
'fchecked = Browser("Browser_SWBLogin").Page("My Dashboard").Frame("Frame").WebCheckBox("CheckBox_DelvyOpt").GetROProperty ("checked")
'
'If fchecked = 0 Then
'	'Browser("Browser_SWBLogin").Page("My Dashboard").Frame("Frame").WebElement("Element_DeliveryOptions").DoubleClick
'	
'	
'End If
'
'
'Browser("Browser_SWBLogin").Page("My Dashboard").Frame("Frame").WebElement("Element_DeliveryOptions").Click


'wait 2
'Browser("Browser_SWBLogin").Page("Page_RFxDashboard").Frame("Frame").WebElement("Element_AdditionalColumns").FireEvent ("onmouseover")
'Wait 0,5
'Print Browser("Browser_SWBLogin").Page("Page_RFxDashboard").Frame("Frame").WebCheckBox("chkDelvyOpt").GetROProperty ("checked")
'Browser("Browser_SWBLogin").Page("Page_RFxDashboard").Frame("Frame").WebElement("Vol Info").DoubleClick
'Print Browser("Browser_SWBLogin").Page("Page_RFxDashboard").Frame("Frame").WebCheckBox("chkDelvyOpt").GetROProperty ("checked")
'Browser("Browser_SWBLogin").Page("Page_RFxDashboard").Frame("Frame").WebButton("OK").Click

'a=Browser("Browser_SWBLogin").Page("Page_RFxDashboard").Frame("Frame").WebTable("Table_RFQTable").GetCellData(10,12)
'print a

Call fn_Driver ("Batch") '- Batch/Setup/CTDevOps
'
'Val1=Browser("Browser_SWBLogin").Page("Page_SWBLogin").Frame("Frame_3").WebTable("TEST_SUR_VPA03").GetCellData(2,75)
'print Val1
'Browser("Browser_SWBLogin").Page("Page_RFQSplit").Frame("Frame_Frame").WebElement("Element_Screen").Click

'On error resume next
'
'For i = 1 to 50
'	
'	
'a=Browser("Browser_SWBLogin").Page("Page_RFxDashboard").Frame("Frame").WebTable("Table_RFQTable").ChildItem(2,i,"WebElement",0)
'
'	Print i & ": " & a.getroproperty ("innertext")
'
'Next
'
'Wait 1
'
'
'set wshShell = CreateObject("WScript.Shell")
'Function Keyword_Count_Press(Keyword,Count)
'UKey = UCase(Keyword)
'Key = "{"&UKey&"}"
'For index  = 1 To Count
'	wshShell.SendKeys key
'Next
'End Function 
'
'call Keyword_Count_Press("backspace",2)
