(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scripts":{"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"openLink":TDV.Tour.Script.openLink,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumePlayers":TDV.Tour.Script.resumePlayers,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"clone":TDV.Tour.Script.clone,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"registerKey":TDV.Tour.Script.registerKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"toggleVR":TDV.Tour.Script.toggleVR,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"disableVR":TDV.Tour.Script.disableVR,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"enableVR":TDV.Tour.Script.enableVR,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPixels":TDV.Tour.Script.getPixels,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeJS":TDV.Tour.Script.executeJS,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setValue":TDV.Tour.Script.setValue,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"init":TDV.Tour.Script.init,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"downloadFile":TDV.Tour.Script.downloadFile,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"playAudioList":TDV.Tour.Script.playAudioList,"getOverlays":TDV.Tour.Script.getOverlays,"quizStart":TDV.Tour.Script.quizStart,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"cloneBindings":TDV.Tour.Script.cloneBindings,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizFinish":TDV.Tour.Script.quizFinish,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getKey":TDV.Tour.Script.getKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getMediaByName":TDV.Tour.Script.getMediaByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isPanorama":TDV.Tour.Script.isPanorama,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"textToSpeech":TDV.Tour.Script.textToSpeech,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"startMeasurement":TDV.Tour.Script.startMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"translate":TDV.Tour.Script.translate,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initQuiz":TDV.Tour.Script.initQuiz,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initAnalytics":TDV.Tour.Script.initAnalytics,"existsKey":TDV.Tour.Script.existsKey,"createTween":TDV.Tour.Script.createTween,"mixObject":TDV.Tour.Script.mixObject,"setLocale":TDV.Tour.Script.setLocale,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay},"minHeight":0,"start":"this.init()","propagateClick":false,"minWidth":0,"id":"rootPlayer","data":{"locales":{"pt":"locale/pt.txt"},"displayTooltipInTouchScreens":true,"defaultLocale":"pt","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false},"name":"Player760","history":{}},"defaultMenu":["fullscreen","mute","rotation"],"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"scrollBarColor":"#000000","scrollBarMargin":2,"watermark":false,"hash": "c72417746c9253bfab1719ea2cd786d2b4c741c7cf545760c84ea40f36a919ef", "definitions": [{"frames":[{"cube":{"levels":[{"colCount":12,"width":12288,"url":"media/panorama_D9996BCB_D36F_0940_41E7_F7835C7D8C42_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"colCount":6,"width":6144,"url":"media/panorama_D9996BCB_D36F_0940_41E7_F7835C7D8C42_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_D9996BCB_D36F_0940_41E7_F7835C7D8C42_t.jpg","class":"CubicPanoramaFrame"}],"label":trans('panorama_D9996BCB_D36F_0940_41E7_F7835C7D8C42.label'),"id":"panorama_D9996BCB_D36F_0940_41E7_F7835C7D8C42","class":"Panorama","hfov":360,"hfovMin":"135%","data":{"label":"20240530_190247_579"},"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_D9996BCB_D36F_0940_41E7_F7835C7D8C42_t.jpg"},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"initialSequence":"this.sequence_D87DDBFB_D36F_0941_41C3_BFCA13755960","id":"panorama_D998CF43_D36F_0940_4193_4F349B8153C4_camera","class":"PanoramaCamera"},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"initialSequence":"this.sequence_D87D4BFA_D36F_0943_41DE_59EB84FCFE6F","id":"panorama_D9996BCB_D36F_0940_41E7_F7835C7D8C42_camera","class":"PanoramaCamera"},{"frames":[{"cube":{"levels":[{"colCount":12,"width":12288,"url":"media/panorama_DFDBB54D_D36F_3940_41E8_4C36D47633D8_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"colCount":6,"width":6144,"url":"media/panorama_DFDBB54D_D36F_3940_41E8_4C36D47633D8_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DFDBB54D_D36F_3940_41E8_4C36D47633D8_t.jpg","class":"CubicPanoramaFrame"}],"label":trans('panorama_DFDBB54D_D36F_3940_41E8_4C36D47633D8.label'),"id":"panorama_DFDBB54D_D36F_3940_41E8_4C36D47633D8","class":"Panorama","hfov":360,"hfovMin":"135%","data":{"label":"20240530_185919_249"},"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_DFDBB54D_D36F_3940_41E8_4C36D47633D8_t.jpg"},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"initialSequence":"this.sequence_D87CABFA_D36F_0943_41D1_93C0FB19C425","id":"panorama_D9991548_D36F_1940_41B7_43494E1EE0E0_camera","class":"PanoramaCamera"},{"frames":[{"cube":{"levels":[{"colCount":12,"width":12288,"url":"media/panorama_D9981882_D36F_77C0_41C6_77DFC037FC14_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"colCount":6,"width":6144,"url":"media/panorama_D9981882_D36F_77C0_41C6_77DFC037FC14_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_D9981882_D36F_77C0_41C6_77DFC037FC14_t.jpg","class":"CubicPanoramaFrame"}],"label":trans('panorama_D9981882_D36F_77C0_41C6_77DFC037FC14.label'),"id":"panorama_D9981882_D36F_77C0_41C6_77DFC037FC14","class":"Panorama","hfov":360,"hfovMin":"135%","data":{"label":"20240530_190322_778"},"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_D9981882_D36F_77C0_41C6_77DFC037FC14_t.jpg"},{"frames":[{"cube":{"levels":[{"colCount":12,"width":12288,"url":"media/panorama_D997AEC3_D36F_0B40_41E4_0363B1FC3DF7_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"colCount":6,"width":6144,"url":"media/panorama_D997AEC3_D36F_0B40_41E4_0363B1FC3DF7_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_D997AEC3_D36F_0B40_41E4_0363B1FC3DF7_t.jpg","class":"CubicPanoramaFrame"}],"label":trans('panorama_D997AEC3_D36F_0B40_41E4_0363B1FC3DF7.label'),"id":"panorama_D997AEC3_D36F_0B40_41E4_0363B1FC3DF7","class":"Panorama","hfov":360,"hfovMin":"135%","data":{"label":"20240530_190223_373"},"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_D997AEC3_D36F_0B40_41E4_0363B1FC3DF7_t.jpg"},{"frames":[{"cube":{"levels":[{"colCount":12,"width":12288,"url":"media/panorama_D998223C_D36F_7AC0_41E4_015C6969B414_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"colCount":6,"width":6144,"url":"media/panorama_D998223C_D36F_7AC0_41E4_015C6969B414_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_D998223C_D36F_7AC0_41E4_015C6969B414_t.jpg","class":"CubicPanoramaFrame"}],"label":trans('panorama_D998223C_D36F_7AC0_41E4_015C6969B414.label'),"id":"panorama_D998223C_D36F_7AC0_41E4_015C6969B414","class":"Panorama","hfov":360,"hfovMin":"135%","data":{"label":"20240530_190301_193"},"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_D998223C_D36F_7AC0_41E4_015C6969B414_t.jpg"},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"initialSequence":"this.sequence_D87D1BFB_D36F_0941_41D4_C6EED1EB413B","id":"panorama_D998223C_D36F_7AC0_41E4_015C6969B414_camera","class":"PanoramaCamera"},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"initialSequence":"this.sequence_D87D3BFB_D36F_0941_41D9_62723BA31174","id":"panorama_D9981882_D36F_77C0_41C6_77DFC037FC14_camera","class":"PanoramaCamera"},{"displayPlaybackBar":true,"mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer"},{"hfov":360,"frames":[{"cube":{"levels":[{"colCount":12,"width":12288,"url":"media/panorama_D99825D7_D36F_1940_41E2_53DD94F71A65_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"colCount":6,"width":6144,"url":"media/panorama_D99825D7_D36F_1940_41E2_53DD94F71A65_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_D99825D7_D36F_1940_41E2_53DD94F71A65_t.jpg","class":"CubicPanoramaFrame"}],"hfovMax":130,"hfovMin":"135%","label":trans('panorama_D99825D7_D36F_1940_41E2_53DD94F71A65.label'),"data":{"label":"panorama-2"},"vfov":180,"thumbnailUrl":"media/panorama_D99825D7_D36F_1940_41E2_53DD94F71A65_t.jpg","id":"panorama_D99825D7_D36F_1940_41E2_53DD94F71A65","class":"Panorama"},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"initialSequence":"this.sequence_D8612BF9_D36F_0941_41E2_30E109604CA9","id":"panorama_DFDBB54D_D36F_3940_41E8_4C36D47633D8_camera","class":"PanoramaCamera"},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"initialSequence":"this.sequence_D87DEBFB_D36F_0941_41C8_5728CE415CB4","id":"panorama_D99825D7_D36F_1940_41E2_53DD94F71A65_camera","class":"PanoramaCamera"},{"items":[{"media":"this.panorama_DFDBB54D_D36F_3940_41E8_4C36D47633D8","camera":"this.panorama_DFDBB54D_D36F_3940_41E8_4C36D47633D8_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem"},{"media":"this.panorama_D997AEC3_D36F_0B40_41E4_0363B1FC3DF7","camera":"this.panorama_D997AEC3_D36F_0B40_41E4_0363B1FC3DF7_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem"},{"media":"this.panorama_D9991548_D36F_1940_41B7_43494E1EE0E0","camera":"this.panorama_D9991548_D36F_1940_41B7_43494E1EE0E0_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem"},{"media":"this.panorama_D9996BCB_D36F_0940_41E7_F7835C7D8C42","camera":"this.panorama_D9996BCB_D36F_0940_41E7_F7835C7D8C42_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","class":"PanoramaPlayListItem"},{"media":"this.panorama_D998223C_D36F_7AC0_41E4_015C6969B414","camera":"this.panorama_D998223C_D36F_7AC0_41E4_015C6969B414_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)","class":"PanoramaPlayListItem"},{"media":"this.panorama_D9981882_D36F_77C0_41C6_77DFC037FC14","camera":"this.panorama_D9981882_D36F_77C0_41C6_77DFC037FC14_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 6)","class":"PanoramaPlayListItem"},{"media":"this.panorama_D998CF43_D36F_0940_4193_4F349B8153C4","camera":"this.panorama_D998CF43_D36F_0940_4193_4F349B8153C4_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 6, 7)","class":"PanoramaPlayListItem"},{"media":"this.panorama_D99825D7_D36F_1940_41E2_53DD94F71A65","end":"this.trigger('tourEnded')","camera":"this.panorama_D99825D7_D36F_1940_41E2_53DD94F71A65_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 7, 0)","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"initialSequence":"this.sequence_D87C8BFA_D36F_0943_41D9_12D03D31F442","id":"panorama_D997AEC3_D36F_0B40_41E4_0363B1FC3DF7_camera","class":"PanoramaCamera"},{"frames":[{"cube":{"levels":[{"colCount":12,"width":12288,"url":"media/panorama_D9991548_D36F_1940_41B7_43494E1EE0E0_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"colCount":6,"width":6144,"url":"media/panorama_D9991548_D36F_1940_41B7_43494E1EE0E0_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_D9991548_D36F_1940_41B7_43494E1EE0E0_t.jpg","class":"CubicPanoramaFrame"}],"label":trans('panorama_D9991548_D36F_1940_41B7_43494E1EE0E0.label'),"id":"panorama_D9991548_D36F_1940_41B7_43494E1EE0E0","class":"Panorama","hfov":360,"hfovMin":"135%","data":{"label":"20240530_190235_493"},"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_D9991548_D36F_1940_41B7_43494E1EE0E0_t.jpg"},{"hfov":360,"frames":[{"cube":{"levels":[{"colCount":12,"width":12288,"url":"media/panorama_D998CF43_D36F_0940_4193_4F349B8153C4_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"colCount":6,"width":6144,"url":"media/panorama_D998CF43_D36F_0940_4193_4F349B8153C4_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_D998CF43_D36F_0940_4193_4F349B8153C4_t.jpg","class":"CubicPanoramaFrame"}],"hfovMax":130,"hfovMin":"135%","label":trans('panorama_D998CF43_D36F_0940_4193_4F349B8153C4.label'),"data":{"label":"panorama"},"vfov":180,"thumbnailUrl":"media/panorama_D998CF43_D36F_0940_4193_4F349B8153C4_t.jpg","id":"panorama_D998CF43_D36F_0940_4193_4F349B8153C4","class":"Panorama"},{"vrPointerColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionTime":2000,"progressRight":"33%","minHeight":50,"propagateClick":false,"minWidth":100,"progressOpacity":0.7,"firstTransitionDuration":0,"playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowOpacity":1,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"progressBarBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarBorderColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"toolTipPaddingTop":4,"subtitlesFontFamily":"Arial","toolTipFontSize":"1.11vmin","toolTipPaddingBottom":4,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderRadius":0,"progressLeft":"33%","playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"toolTipFontColor":"#606060","playbackBarBorderSize":0,"toolTipFontFamily":"Arial","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTop":0,"id":"MainViewer","progressBackgroundColor":["#000000"],"subtitlesBottom":50,"surfaceReticleColor":"#FFFFFF","playbackBarHeight":10,"progressBottom":10,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"progressHeight":2,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","subtitlesTextShadowColor":"#000000","progressBarBorderRadius":2,"playbackBarRight":0,"progressBorderSize":0,"subtitlesBackgroundOpacity":0.2,"toolTipPaddingRight":6,"progressBarBorderSize":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6,"class":"ViewerArea","subtitlesGap":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333138","progressBackgroundColorRatios":[0],"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","subtitlesTextShadowVerticalLength":1,"progressBorderRadius":2,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowBlurRadius":3,"height":"100%","width":"100%","playbackBarHeadShadowOpacity":0.7,"vrPointerSelectionColor":"#FF6600"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_D87DDBFB_D36F_0941_41C3_BFCA13755960","class":"PanoramaCameraSequence"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_D87D4BFA_D36F_0943_41DE_59EB84FCFE6F","class":"PanoramaCameraSequence"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_D87CABFA_D36F_0943_41D1_93C0FB19C425","class":"PanoramaCameraSequence"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_D87D1BFB_D36F_0941_41D4_C6EED1EB413B","class":"PanoramaCameraSequence"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_D87D3BFB_D36F_0941_41D9_62723BA31174","class":"PanoramaCameraSequence"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_D8612BF9_D36F_0941_41E2_30E109604CA9","class":"PanoramaCameraSequence"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_D87DEBFB_D36F_0941_41C8_5728CE415CB4","class":"PanoramaCameraSequence"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_D87C8BFA_D36F_0943_41D9_12D03D31F442","class":"PanoramaCameraSequence"}],"class":"Player","width":"100%","gap":10,"layout":"absolute","height":"100%","children":["this.MainViewer"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.8.js.map
})();
//Generated with v2024.0.8, Sun Jul 21 2024