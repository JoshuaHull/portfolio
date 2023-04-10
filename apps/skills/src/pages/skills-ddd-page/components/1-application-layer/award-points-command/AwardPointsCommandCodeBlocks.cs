namespace AwardPointsCommand;

public class TinyCodeBlock {

public async
  Task<int> Handle(
    AwardPointsCommand
    command
  ) {
  var twitchUser = await
    _repo.GetById(
      command.TwitchUserId
    );

  await twitchUser
    .AddPoints(10);
  await _repo
    .SaveChanges();

  return twitchUser
    .Points;
}
}

public class SmallCodeBlock {
public async Task<int> Handle(
  AwardPointsCommand command
) {
  var twitchUser = await _repo.GetById(
    command.TwitchUserId
  );

  await twitchUser.AddPoints(10);
  await _repo.SaveChanges();

  return twitchUser.Points;
}
}

public class MediumCodeBlock {
public async Task<int> Handle(AwardPointsCommand command) {
  var twitchUser = await _repo.GetById(command.TwitchUserId);

  await twitchUser.AddPoints(10);
  await _repo.SaveChanges();

  return twitchUser.Points;
}
}
