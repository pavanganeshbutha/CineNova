import Container from '../components/ui/Container';

const ProfilePage = () => {
  return (
    <main>
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-text-primary font-display font-extrabold text-4xl md:text-5xl lg:text-6xl">
              My Profile
            </h1>
            <p className="text-text-secondary text-lg mt-6">
              Manage your CineNova profile.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ProfilePage;
