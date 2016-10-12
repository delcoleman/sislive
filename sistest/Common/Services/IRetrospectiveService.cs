namespace Common.Services
{
    using System;
    using System.Collections.Generic;
    using Models;

    /// <summary>
    /// Represents the retrospective service
    /// </summary>
    public interface IRetrospectiveService
    {
        /// <summary>
        /// Creates a new retrospective
        /// </summary>
        /// <returns>A newly created retrospective object</returns>
        IRetrospective CreateRetrospective();

        
        IEnumerable<IRetrospective> GetRetrospectives();
    }
}
