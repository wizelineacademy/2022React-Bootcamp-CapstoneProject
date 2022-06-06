import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {NavigateBefore} from '@styled-icons/material-outlined/NavigateBefore';
import {Pause} from '@styled-icons/bootstrap/Pause';
import {NavigateNext} from '@styled-icons/material-outlined/NavigateNext';
import {Play} from '@styled-icons/boxicons-regular/Play';

import styled from 'styled-components';

const PLAYBACK_SPEED_MS = 3000;

const width = 300;
const height = 300;
const StyledSliderBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-height: ${height}px;
    min-width: ${width}px;
    margin: ${({theme}) => theme.coreSpace * 2}px;
    margin-top: ${({theme}) => theme.coreSpace * 4}px;
`;
const StyledSliderBannerNavigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 60%;

    margin-top: -30px;
`;
const StyledSliderBannerImg = styled.img`
    max-width: 80%;
    max-height: ${height}px;
`;
const StyledSliderBannerTitleContainer = styled.div`
    position: absolute;
    color: white;
`;
const StyledSliderBannerTitle = styled.h4`
    text-shadow: 0px 0px 4px black;
`;

const SliderBanner = ({items}) => {
    const [bannerIdx, setBannerIdx] = useState(1);
    const [isPlaybackActive, setIsPlaybackActive] = useState(true);
    let playbackInterval = null;

    const resumePlayback = () => {
        playbackInterval = setInterval(() => {
            handleNextBanner();
        }, PLAYBACK_SPEED_MS);
    };

    const stopPlayback = () => {
        clearInterval(playbackInterval);
        playbackInterval = null;
    };

    useEffect(() => {
        if (isPlaybackActive) {
            resumePlayback();
        }

        return () => {
            stopPlayback();
        };
    }, [bannerIdx, isPlaybackActive]);
    

    const bannersDataLength = items.length;
    if (bannerIdx >= bannersDataLength) {
        setIsPlaybackActive(false);
        return null;
    };

    const handlePrevBanner = () => {
        let nextBannerIdx = (bannerIdx - 1) % bannersDataLength;
        if (nextBannerIdx < 0) {
            nextBannerIdx = bannersDataLength - 1;
        }
        setBannerIdx(nextBannerIdx);

    };
    const handleBannerPlayback = () => {
        setIsPlaybackActive(!isPlaybackActive);
        if (isPlaybackActive) {
            stopPlayback();
        } else {
            resumePlayback();
        }
    };
    const handleNextBanner = () => {
        const nextBannerIdx = (bannerIdx + 1) % bannersDataLength;
        setBannerIdx(nextBannerIdx);
    };

    const bannerDetails = items[bannerIdx];
    const bannerImgUrl = bannerDetails?.data?.main_image?.url;

    return (
        <StyledSliderBanner>
            {/* Content */}
            <StyledSliderBannerTitleContainer>
                <StyledSliderBannerTitle>
                    {bannerDetails.data.title}
                </StyledSliderBannerTitle>
            </StyledSliderBannerTitleContainer>
            <StyledSliderBannerImg src={bannerImgUrl}/>
            {/* Navigation */}
            <StyledSliderBannerNavigation>
                <Button
                    type="transparent"
                    onClick={handlePrevBanner}
                >
                    <NavigateBefore size="18"/>
                </Button>
                <Button
                    type="transparent"
                    onClick={handleBannerPlayback}
                >
                    {
                        isPlaybackActive
                            ? <Pause size="18"/>
                            : <Play size="18"/>
                    }
                    
                </Button>
                <Button
                    type="transparent"
                    onClick={handleNextBanner}
                >
                    <NavigateNext size="18"/>
                </Button>
            </StyledSliderBannerNavigation>
        </StyledSliderBanner>
    );
}

SliderBanner.propTypes = {
    items: PropTypes.array.isRequired,
}

export default SliderBanner;