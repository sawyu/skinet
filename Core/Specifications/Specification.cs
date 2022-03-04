
using System.Linq.Expressions;

namespace Core.Specifications
{
    public class Specification : ISpecification<Task>
    {
        public Expression<Func<Task, bool>> Criteria => throw new NotImplementedException();

        public List<Expression<Func<Task, object>>> Includes => throw new NotImplementedException();
    }
}