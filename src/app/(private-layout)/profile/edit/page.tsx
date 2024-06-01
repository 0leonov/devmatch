import { auth } from "@/auth";
import { getSkills } from "@/features/skills/lib";
import { EditProfileForm } from "@/features/users/edit-profile-form";
import { EditSkillsForm } from "@/features/users/edit-skills-form";
import { EditUsernameForm } from "@/features/users/edit-username-form";
import { getUserSkills } from "@/features/users/lib";

export default async function EditProfile() {
  const session = await auth();

  if (!session) {
    throw Error("Not authenticated");
  }

  const skills = await getSkills();

  const defaultSkillIds = (await getUserSkills(session.user.id)).map(
    ({ id }) => id,
  );

  return (
    <main className="container max-w-screen-sm space-y-8 py-8">
      <EditUsernameForm action="Save" username={session.user.username} />

      <EditSkillsForm allSkills={skills} defaultSkillIds={defaultSkillIds} />

      <EditProfileForm
        bio={session.user.bio}
        gender={session.user.gender}
        birthdate={session.user.birthdate}
        name={session.user.name}
      />
    </main>
  );
}
