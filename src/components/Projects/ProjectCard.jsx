import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const TiltContainer = styled(motion.div)`
	text-decoration: none;
	color: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
	width: 100%;
	aspect-ratio: 16 / 10;
	margin-bottom: 2rem;

	margin: 0 auto;
	max-width: 45rem;
`;

const TiltCard = styled(Tilt)`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform-style: preserve-3d;

	text-align: center;
	width: 135%;
	aspect-ratio: 16 / 12;
`;

const ProjectCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	border-radius: 1rem;
	width: calc(74% - 4rem);
	aspect-ratio: 16 / 10;

	position: relative;
	overflow: hidden;

	text-align: center;
	background-color: rgba(255, 255, 255, 0.1);
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));

	box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 1rem;
		background: rgb(0, 0, 0, 0.3);
	}
`;

const ProjectImage = styled(motion.img)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top;
	z-index: -1;
	user-select: none;
`;

const ProjectPreview = styled(motion.img)`
	width: 100%;
	height: auto;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 1rem;
	z-index: -2;
	user-select: none;
	opacity: 0;
`;
const ProjectCardPerspective = styled.div`
	width: calc(74% - 5rem);
	padding: 1.5rem;
	aspect-ratio: 16 / 10;
	position: absolute;
	transform: translateZ(5rem);
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.8), 0 0 0.5rem rgba(0, 0, 0, 0.6);

	font-size: 0.9em;

	@media screen and (min-width: 30rem) {
		padding: 1.5rem 2rem;
		font-size: 1em;
		align-items: normal;
	}

	@media screen and (min-width: 60rem) {
		padding: 2rem 2rem;
	}
`;

const ProjectInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	justify-content: flex-end;
	align-items: center;
	gap: 0.5rem;
`;

const ProjectTitle = styled.h3`
	font-size: 1.8em;
	width: 100%;
`;

const ProjectDescription = styled.p`
	display: none;
	font-size: 1em;
	@media screen and (min-width: 35rem) {
		display: block;
	}
`;

const PorjectBottom = styled.div`
	width: 100%;
	bottom: 0;
	display: flex;
	align-self: flex-end;
	justify-content: space-between;
	align-items: flex-end;
	font-size: 0.8em;

	@media screen and (min-width: 35rem) {
		font-size: 1em;
	}
`;

const ProjectTechnologies = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	opacity: 0.9;
`;

const ProjectLinks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const Technology = styled.div`
	width: 1.5em;
	height: 1.5em;
`;

const TechnologyImage = styled.img`
	width: 100%;
	height: 100%;
	filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.5));
`;

const WebLink = styled(motion.a)`
	width: 2.4em;
	height: 2.4em;

	filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.3));
`;

const GithubLink = styled(motion.a)`
	width: 2.5em;
	height: 2.5em;

	filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.3));
`;

const LinkImage = styled.img`
	width: 100%;
	height: 100%;
`;

const getTechnologyIcon = (technology) => {
	switch (technology) {
		case 'React':
			return '/icons/react.svg';
		case 'Redux':
			return '/icons/redux.svg';
		case 'Node':
			return '/icons/nodejs.svg';
		case 'Sass':
			return '/icons/sass.svg';
		case 'Styled Components':
			return '/icons/styled-components.svg';
		case 'Framer Motion':
			return '/icons/framer-motion.svg';
		case 'HTML':
			return '/icons/html.svg';
		case 'CSS':
			return '/icons/css.svg';
		case 'JavaScript':
			return '/icons/js.svg';
		case 'React Router':
			return '/icons/router.svg';
		default:
			return '';
	}
};

export const ProjectCard = ({ project, index, activeCard, setActiveCard }) => {
	const item = {
		hidden: {
			opacity: 0,

			y: 100,
		},
		show: {
			opacity: 1,
			y: 0,

			transition: {
				duration: 1,
			},
		},
	};

	const image = {
		start: {
			opacity: 1,
		},
		scroll: {
			opacity: 0,
		},
	};
	const preview = {
		start: {
			y: '0%',
			top: '0%',
			opacity: 0,
		},
		scroll: {
			y: '-100%',
			top: '100%',
			opacity: 1,

			transition: {
				duration: project.speed,
				repeat: Infinity,
				repeatDelay: 2,

				opacity: {
					duration: 0.5,
				},
			},
		},
	};

	return (
		<TiltContainer
			variants={item}
			onHoverStart={() => setActiveCard(index)}
			onHoverEnd={() => setActiveCard(null)}
			onTouchStart={() => setActiveCard(index)}
			animate={activeCard === index ? 'scroll' : 'start'}
		>
			<TiltCard
				transitionSpeed={5000}
				perspective={2000}
				// tiltReverse={true}
			>
				<ProjectCardStyled>
					<ProjectImage
						src={project.image}
						alt={project.name}
						variants={image}
						transition={{
							duration: 0.5,
						}}
					/>

					<ProjectPreview
						src={project.preview}
						alt={project.name}
						variants={preview}
						transition={{
							opacity: {
								duration: 0.5,
							},
							delay: 0.5,
						}}
					/>
				</ProjectCardStyled>
				<ProjectCardPerspective>
					<ProjectInfo>
						<ProjectTitle>{project.name}</ProjectTitle>
						<ProjectDescription>{project.description}</ProjectDescription>
					</ProjectInfo>
					<PorjectBottom>
						<ProjectTechnologies>
							{project.technologies.map((technology, index) => (
								<Technology key={index}>
									<TechnologyImage src={getTechnologyIcon(technology)} alt={technology} />
								</Technology>
							))}
						</ProjectTechnologies>

						<ProjectLinks>
							<GithubLink
								whileHover={{ scale: 1.2 }}
								href={project.repository}
								target='_blank'
								rel='noopener noreferrer'
							>
								<LinkImage src='/icons/github-icon.svg' alt='Github' />
							</GithubLink>
							<WebLink
								whileHover={{ scale: 1.2 }}
								href={project.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								<LinkImage src='/icons/external-link_5.svg' alt='Web' />
							</WebLink>
						</ProjectLinks>
					</PorjectBottom>
				</ProjectCardPerspective>
			</TiltCard>
		</TiltContainer>
	);
};
