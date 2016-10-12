namespace Common.Models
{
    /// <summary>
    /// Represents a participant of a retrospective
    /// </summary>
    public interface IParticipant
    {
        /// <summary>
        /// Gets the name of the participant
        /// </summary>
        string Name
        {
            get;
        }
    }
}
