function FindProxyForURL(url, host)
{
    if (   localHostOrDomainIs(host, "osapi.dmm.com") 
		|| localHostOrDomainIs(host, "222.158.206.170") 
	)
    {
		return "PROXY 127.0.0.1:8888";
    }
    else {
 		return "DIRECT";
    }
}

 /*



http://osapi.dmm.com
http://222.158.206.170/Bakushi.swf?v=1.952
http://major.labynd.com/gadget?v=1.85
http://log-netgame.dmm.com/freegame_app_access.php?user_id=14995703&app_id=994435&device=pc
 
*/