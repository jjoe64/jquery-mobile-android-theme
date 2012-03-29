About
----------
This is a custom jquery mobile theme, that matches the Holo theme family in Android 4.0 Theme.Holo.Dark and Theme.Holo.Light.

http://developer.android.com/design/building-blocks/buttons.html

How to use
-----------
* Download the sources (js, css, themes-folder) from github
* Include it in your html file:

<link rel="stylesheet" href="themes/android-theme.css" />
<script type="text/javascript">
var DEBUG_ANDROID_THEME=true
</script>
<script type="text/javascript" src="jquery.mobile.android-theme.js"></script>

Special
---------
* hide-on-android css class
	use this class, to hide some elements on android devices (e.g. header back button)

See
-----
http://www.jjoe64.com/2011/09/android-theme-for-jquery-mobile.html

How to build
----------------
The basic css is generated with the jquery mobile theme generator. Then all rules are wrapped with .android class. Compile it with SASS.

