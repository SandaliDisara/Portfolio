export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold mb-4 text-white animate-bounce">
        Hi! I&apos;m Sandali Dissanayake
      </h1>
      <p className="text-lg text-center text-white animate-fade-in">
        I recently completed my 4-year academic journey as a Software Engineering student. <br />
        I&apos;m working on my portfolio and will be releasing a new version soon.{" "}
        <span className="font-bold animate-pulse">Stay tuned!</span>
      </p>
    </div>
  );
}
