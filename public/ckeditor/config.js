﻿/**
 * @license Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.extraPlugins = 'blaudobject';
	config.plugins = 'dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,div,resize,toolbar,elementspath,list,indent,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,htmlwriter,horizontalrule,iframe,wysiwygarea,image,smiley,justify,link,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,stylescombo,tab,table,tabletools,undo,mediaembed,placeholder,menubutton,tableresize,onchange,blaudobject';
	config.skin = 'moono';
	// %REMOVE_END%

	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
        
        config.filebrowserBrowseUrl = '/kcfinder/browse.php?type=files';
        config.filebrowserImageBrowseUrl = '/kcfinder/browse.php?type=images';
        config.filebrowserFlashBrowseUrl = '/kcfinder/browse.php?type=flash';
        config.filebrowserUploadUrl = 'kcfinder/upload.php?type=files';
        config.filebrowserImageUploadUrl = '/kcfinder/upload.php?type=images';
        config.filebrowserFlashUploadUrl = '/kcfinder/upload.php?type=flash';
};
