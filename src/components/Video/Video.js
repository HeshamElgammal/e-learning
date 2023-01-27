import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {Slider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Orientation from 'react-native-orientation';
import {appColors, appSizes} from 'theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {useRef} from 'react';
const VideoComponent = ({isFullScreen = false, setIsFullScreen}) => {
  const localVideoRef = useRef(null);
  const [video, setVideo] = React.useState({
    currentTime: 0,
    duration: 0.1,
    paused: true,
    overlay: true,
    fulltime: 0.1,
  });
  const [isMuted, setIsMuted] = React.useState(false);
  const [screenType, setScreenType] = React.useState('cover');
  const togglePlay = () => {
    setVideo(prev => ({...prev, paused: !prev.paused}));
  };
  const toggleOverLay = () => {
    setVideo(prev => ({...prev, overlay: !prev.overlay}));
  };
  const youTubeSeekLeft = () => {
    localVideoRef.current.seek(video.currentTime - 5);
  };
  const youTubeSeekRight = () => {
    localVideoRef.current.seek(video.currentTime + 5);
  };
  const setSlide = value => {
    localVideoRef.current.seek(value * video.duration);
  };
  const getTime = t => {
    const digit = n => (n < 10 ? `0${n}` : `${n}`);
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t / 60) % 60));
    const hr = digit(Math.floor((t / 3600) % 60));
    return hr + ':' + min + ':' + sec;
  };

  const load = ({duration}) => {
    setVideo(prev => ({...prev, duration}));
  };

  const progress = ({currentTime}) => {
    setVideo(prev => ({...prev, currentTime}));
  };
  const onFullScreen = () => {
    if (isFullScreen) {
      Orientation.lockToPortrait();
      setScreenType('contain');
    } else {
      setScreenType('contain');

      Orientation.lockToLandscape();
    }
    setIsFullScreen(prev => !prev);
  };
  const onMute = () => {
    setIsMuted(prev => !prev);
  };
  return (
    <TouchableWithoutFeedback
      onPress={toggleOverLay}
      style={
        isFullScreen
          ? {
              width: Dimensions.get('window').width / 1,
              height: Dimensions.get('window').height / 1,
              // ...StyleSheet.absoluteFill,
              backgroundColor: appColors.primary,
            }
          : {width: '100%', height: '100%'}
      }>
      <View
        style={
          isFullScreen
            ? {
                width: Dimensions.get('window').width / 1.0002,
                height: Dimensions.get('window').height + 15,
                backgroundColor: appColors.primary,
                // marginTop:10,
                marginLeft: -16,
                // ...StyleSheet.absoluteFill,
              }
            : styles.conatainer
        }>
        <Video
          source={{
            uri: `https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8`,
          }} // Can be a URL or a local file.
          ref={localVideoRef}
          paused={video.paused}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode={screenType}
          onLoad={load}
          fullscreen={isFullScreen}
          //   fullscreenOrientation={'portrait'}
          onProgress={progress}
          muted={isMuted}
        />
        <View
          style={[
            styles.overlay,
            {backgroundColor: !video.overlay ? '#0006' : 'transparent'},
          ]}>
          {!video.overlay ? (
            <View
              style={[
                styles.overlaySet,
                {marginTop: isFullScreen ? RFValue(140) : appSizes.with / 4.8},
              ]}>
              <Icon
                name="backward"
                style={styles.icon}
                onPress={youTubeSeekLeft}
                color={appColors.white}
                size={25}
              />

              <Icon
                name={video.paused ? 'play' : 'pause'}
                style={styles.icon}
                onPress={togglePlay}
                size={25}
                color={appColors.white}
              />
              <Icon
                name="forward"
                style={styles.icon}
                onPress={youTubeSeekRight}
                color={appColors.white}
                size={25}
              />
            </View>
          ) : (
            <View style={styles.overlaySet}>
              <TouchableNativeFeedback onPress={youTubeSeekLeft}>
                <View style={{flex: 1}}></View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={youTubeSeekRight}>
                <View style={{flex: 1}}></View>
              </TouchableNativeFeedback>
            </View>
          )}
          {!video.overlay ? (
            <>
              <View style={styles.timer}>
                <View style={styles.containerTimeText}>
                  <Text style={styles.timeText}>
                    {getTime(video.currentTime)}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.timeText]}>
                      {getTime(video.duration)}
                      {'   '}
                    </Text>
                    <Icon
                      name={isFullScreen ? 'compress' : 'expand'}
                      style={{}}
                      onPress={onFullScreen}
                      color={appColors.white}
                      size={20}
                    />
                    <Icon
                      name={isMuted ? 'volume-mute' : 'volume-down'}
                      style={{marginLeft: 10}}
                      onPress={onMute}
                      color={appColors.white}
                      size={20}
                    />
                  </View>
                </View>

                <Slider
                  style={{width: '100%', height: 20, marginTop: 10}}
                  thumbTintColor={appColors.blue}
                  thumbStyle={{width: 15, height: 15}}
                  maximumTrackTintColor={appColors.placeholder}
                  minimumTrackTintColor={appColors.whiteBlue}
                  value={video.currentTime / video.duration}
                  onValueChange={setSlide}
                />
              </View>
            </>
          ) : (
            <></>
          )}
        </View>
        {/* <TouchableOpacity style={styles.btnPuase}>
        <VideoPlayy width={50} height={50} />
      </TouchableOpacity> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VideoComponent;

const styles = StyleSheet.create({
  conatainer: {
    width: '100%',
    alignSelf: 'flex-start',
    height: appSizes.with / 1.8,
    backgroundColor: appColors.primary,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 1,
  },
  btnPuase: {
    position: 'absolute',
    top: appSizes.with / 5,
    left: appSizes.with / 2.55,
    zIndex: 1000,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    // backgroundColor: '#0006',
    width: '100%',
    height: '100%',
  },
  overlaySet: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: appSizes.with / 4.8,
  },
  icon: {
    // width: 20,
    // height: 20,
  },
  timer: {
    width: '100%',
    height: 65,
    backgroundColor: '#0006',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
  },
  containerTimeText: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 5,
  },
  timeText: {
    color: appColors.white,
    fontSize: appSizes.m,
  },
});
