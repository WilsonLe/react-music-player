import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

// style
const pointer = { cursor: "pointer" };

const Player = ({
	currentSong,
	setCurrentSong,
	isPlaying,
	setIsPlaying,
	audioRef,
	songInfo,
	setSongInfo,
	songs,
	setSongs,
}) => {
	// Event handlers
	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	const togglePlayPauseIcon = () => {
		if (isPlaying) {
			return faPause;
		} else {
			return faPlay;
		}
	};

	const getTime = (time) => {
		let minute = Math.floor(time / 60);
		let second = ("0" + Math.floor(time % 60)).slice(-2);
		return `${minute}:${second}`;
	};

	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const skipTrackHandler = async (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === "skip-forward") {
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
			activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
		} else if (direction === "skip-back") {
			if ((currentIndex - 1) % songs.length === -1) {
				await setCurrentSong(songs[songs.length - 1]);
				activeLibraryHandler(songs[songs.length - 1]);
			} else {
				await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
				activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
			}
		}
		if (isPlaying) {
			audioRef.current.play();
		}
	};

	const activeLibraryHandler = (newSong) => {
		const newSongs = songs.map((song) => {
			if (song.id === newSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);
	};

	return (
		<PlayerContainer>
			<TimeControlContainer>
				<P>{getTime(songInfo.currentTime || 0)}</P>

				<Input
					onChange={dragHandler}
					min={0}
					max={songInfo.duration || 0}
					value={songInfo.currentTime}
					type="range"
				/>

				<P>{getTime(songInfo.duration || 0)}</P>
			</TimeControlContainer>

			<PlayControlContainer>
				<FontAwesomeIcon
					onClick={() => skipTrackHandler("skip-back")}
					className="skip-back"
					icon={faAngleLeft}
					size="2x"
					style={pointer}
				/>
				<FontAwesomeIcon
					onClick={playSongHandler}
					className="play"
					icon={togglePlayPauseIcon()}
					size="2x"
					style={pointer}
				/>
				<FontAwesomeIcon
					onClick={() => skipTrackHandler("skip-forward")}
					className="skip-forward"
					icon={faAngleRight}
					size="2x"
					style={pointer}
				/>
			</PlayControlContainer>
		</PlayerContainer>
	);
};

const PlayerContainer = styled.div`
	min-height: 20vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const TimeControlContainer = styled.div`
	width: 50%;
	display: flex;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const Input = styled.input`
	width: 100%;
`;

const P = styled.p`
	padding: 1rem;
	user-select: none;
`;

const PlayControlContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	width: 30%;
	@media screen and (max-width: 768px) {
		width: 60%;
	}
`;

export default Player;
