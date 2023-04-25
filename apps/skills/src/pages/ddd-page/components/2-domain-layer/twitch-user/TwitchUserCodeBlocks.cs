namespace TwitchUser;

public class TinyCodeBlock {

public class TwitchUser {
  public string Name
    => _user.Name;
  public int Points
    => _user.Points;
  public string TwitchId
    => _a.ExternalId;

  public User _user;
  public LinkedAccount _a;

  public Task AddPoints(
    int points
  ) {
    _user.Points += points;

    return Task
      .CompletedTask;
  }
}
}

public class SmallCodeBlock {
public class TwitchUser {
  public string Name => _user.Name;
  public int Points => _user.Points;
  public string TwitchId => _acc.ExternalId;

  private readonly User _user;
  private readonly LinkedAccount _acc;

  public Task AddPoints(int points) {
    _user.Points += points;
    return Task.CompletedTask;
  }
}
}

public class MediumCodeBlock {
public class TwitchUser {
  public string Name => _user.Name;
  public int Points => _user.Points;
  public string TwitchId => _linkedAccount.ExternalId;

  private readonly User _user;
  private readonly LinkedAccount _linkedAccount;

  public Task AddPoints(int points) {
    _user.Points += points;
    return Task.CompletedTask;
  }
}
}
