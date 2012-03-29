About
----------
This is a custom jquery mobile theme, that matches the Holo theme family in Android 4.0 Theme.Holo.Dark and Theme.Holo.Light.

http://developer.android.com/design/building-blocks/buttons.html

![Preview](https://github.com/jjoe64/jquery-mobile-android-theme/raw/master/preview.png "Preview")

How to use
-----------
* Download the sources (js, css, themes-folder) from github
* Include it in your html file:

> &lt;link rel="stylesheet" href="themes/android-theme.css" /&gt;<br>
> &lt;script type="text/javascript"&gt;<br>
> var DEBUG_ANDROID_THEME=true<br>
> &lt;/script&gt;<br>
> &lt;script type="text/javascript" src="jquery.mobile.android-theme.js"&gt;&lt;/script&gt;

Special
---------
* hide-on-android css class
	use this class, to hide some elements on android devices (e.g. header back button)



How to build / customize
-------------------------
The basic css is generated with the jquery mobile theme generator.
Then all rules are wrapped with .android class. Compile it with SASS.

### Import into jquery mobile theme generator
* Go to http://jquerymobile.com/themeroller/
* Click "Import" (top-left-corner)
* Open the file android-theme.scss in any editor
* remove the line at the beginning:
  body.android {
* remove the last line "}"
* copy now the content of this file into the theme generator import-window

### Export and compile
* Click on "Download-Theme"
* Name it "android-theme"
* Download it, extract and copy the file "themes/android-theme.css" to the "themes/android-theme.scss" of this project. Overwrite it.
* Wrap the complete content with body.android:
  * add the line at the beginning:
    body.android {
  * add a closing "}" at the end of the file
* Compile it with SASS

See
-----
http://www.jjoe64.com/2011/09/android-theme-for-jquery-mobile.html

