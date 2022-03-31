var packageName = common.getcontext().getPackageName();

if (packageName == 'com.meitu.meiyancamera') {
    //美颜相机本地VIP破解
    common.hookAllMethods('com.meitu.myxj.b.a$a', 'j', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'com.shineyie.aijianji') {
    //爱剪辑本地VIP破解
    common.hookAllMethods('com.shineyie.common.user.UserManager', 'isVip', function (param) {
        param.setResult(true);
    });
    common.hookAllMethods('com.shineyie.common.user.UserManager', 'isForeverVip', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'com.piriform.ccleaner') {
    //CCleaner本地解锁高级版
    common.hookAllMethods('com.avast.android.cleaner.subscription.ﹳ', 'ۦ', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'com.moji.mjweather') {
    //墨迹天气本地VIP破解
    common.hookAllMethods('com.moji.account.data.UserInfo', 'isVip', function (param) {
        param.setResult(true);
    });
    common.hookAllMethods('com.moji.preferences.ProcessPrefer', 'getIsVip', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'com.dou_pai.DouPai') {
    //逗拍本地VIP破解
    common.hookAllMethods('com.dou_pai.DouPai.model.Muser', 'isUserVip', function (param) {
        param.setResult(true);
    });
    common.hookAllMethods('com.dou_pai.DouPai.model.Muser', 'isUserVipPassDateEmpty', function (param) {
        param.setResult(false);
    });
} else if (packageName == 'com.cam.faceshow') {
    //炫拍本地VIP破解
    common.hookAllMethods('f.k.f.j', 'E0', function (param) {
        param.setResult(true);
    });
    common.hookAllMethods('f.k.f.j', 'D0', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'cn.wps.moffice_eng') {
    //WPS本地VIP破解
    common.hookAllMethods('e39', 'w', function (param) {
        param.setResult(true);
    });
    common.hookAllMethods('e39', 'x', function (param) {
        param.setResult(true);
    });
    common.hookAllMethods('e39', 'z', function (param) {
        param.setResult(true);
    });
    common.hookAllMethods('e39', 's', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'vStudio.Android.Camera360') {
    //相机360本地VIP破解
    common.hookAllMethods('com.pinguo.camera360.vip.VipManager', 'H', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'com.mt.mtxx.mtxx') {
    //美图秀秀本地VIP破解
    common.hookAllMethods('com.meitu.vip.util.XXVipUtil', 'd0', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'com.shoujiduoduo.ringtone') {
    //铃声多多本地VIP破解
    common.hookAllMethods('com.shoujiduoduo.base.bean.UserInfo', 'isVip', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'cn.kuwo.player') {
    //酷我音乐本地VIP以及换肤破解
    common.hookMethod('cn.kuwo.peculiar.specialinfo.c', 'c', null, function (param) {
        param.setResult(java.lang.Integer.valueOf(1));
    });
    common.hookAllMethods('cn.kuwo.base.bean.Music', 'isSpPrivilege', function (param) {
        param.setResult(true);
    });
    common.hookMethod('cn.kuwo.mod.theme.detail.star.StarThemeDetailPresenter', 'checkStarThemeFree', ['cn.kuwo.mod.theme.bean.star.StarTheme'], function (param) {
        param.setResult(true);
    });
} else if (packageName == 'com.xs.fm') {
    //番茄畅听本地VIP破解
    common.hookAllMethods('com.dragon.read.user.b', 'j', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'com.naiyoubz.main') {
    //奶由壁纸本地VIP破解
    common.hookAllMethods('com.naiyoubz.main.model.net.AccountModel', 'isVip', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'com.lcw.easydownload') {
    //便捷下载本地VIP破解
    common.hookAllMethods('Sa.e', 'Mt', function (param) {
        param.setResult(java.lang.Integer.valueOf(2));
    });
    common.hookAllMethods('Sa.e', 'isVip', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'com.gorgeous.lite') {
    //轻颜相机本地VIP破解
    common.hookMethod('com.lm.components.subscribe.config.UserVipInfo', 'getEndTime', null, function (param) {
        param.setResult('2848431461');
    });
    common.hookMethod('com.lm.components.subscribe.config.UserVipInfo', 'isVipUser', null, function (param) {
        param.setResult(true);
    });
    common.hookMethod('com.lm.components.utils.u', 'EY', null, function (param) {
        param.setResult(true);
    });
}
