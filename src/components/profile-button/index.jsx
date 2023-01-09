import React from "react";
import * as S from "./styles";

function ProfileButton() {
  return (
    <S.ProfileButton>
      <S.Image
        src="https://avatars.githubusercontent.com/u/60665510?v=4"
        alt="Mehmet Pekcan"
      />
      <S.Content>
        <S.Text>Mehmet Pekcan</S.Text>
        <S.Subtitle>Admin</S.Subtitle>
      </S.Content>
    </S.ProfileButton>
  );
}

export { ProfileButton };
