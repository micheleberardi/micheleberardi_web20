import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Poke AI"
        description="Poke AI brings the future of interactive chatting to your fingertips! Immerse yourself in engaging conversations and explore a myriad of topics with our advanced AI. Whether you're looking for a quick chat, answers to your questions, or just some fun, Poke AI is here to keep you company. With a user-friendly interface and quick response times, your chatting experience is smooth and enjoyable."
        link="https://apps.apple.com/us/app/poke-ai/id6470132514"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>SwiftUI</Tags>
            <Tags color={ColorTags.LIME}>Python</Tags>
          </>
        }
      />
      <Project
        name="RacingMike"
        description="Blazing-Fast Updates: Stay ahead of the curve with real-time results and live race updates. right at your fingertips.Welcome to Racing Mike, the ultimate hub for all high-octane motorsports action! Immerse yourself in the world of speed and precision, as we bring you the latest and greatest from MotoGP and Formula Racing."
        link="https://apps.apple.com/us/app/racing-mike/id6470733612"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>SwiftUI</Tags>
            <Tags color={ColorTags.LIME}>Python</Tags>
          </>
        }
      />
      <Project
        name="JUSTMMA"
        description="The JUSTMMA app is your go-to source for the latest news, updates, and insights in the world of Mixed Martial Arts (MMA). Stay connected with real-time feeds, captivating articles, and in-depth analysis directly from the heart of the MMA community. Whether you're a hardcore fan or just getting into the sport, the JUSTMMA app brings the intensity and passion of the cage right to your fingertips"
        link="https://apps.apple.com/us/app/justmma/id1255714718"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>SwiftUI</Tags>
            <Tags color={ColorTags.LIME}>Python</Tags>
          </>
        }
      />
      <Project
        name="CryptoMike"
        description="cryptomike monitoring crypto market and exchange market is not a trade app"
        link="https://apps.apple.com/us/app/cryptomike/id1624665033"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>SwiftUI</Tags>
            <Tags color={ColorTags.LIME}>Python</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
